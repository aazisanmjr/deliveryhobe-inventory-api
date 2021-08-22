import { InventoryService } from './../inventory/inventory.service';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt)
@Injectable()
export class AuthService {
    constructor( private InventoryService:InventoryService){}

    async signin(email: string, password: string) {
    const [user] = await this.InventoryService.find(email);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    const [salt, storedHash] = user.password.split('.');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('password');
    }

    return user;
  }
}
