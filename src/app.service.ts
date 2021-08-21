import { Warehouse } from './warehouse/warehouse.entity';
import { Area } from './area/area.entity';
import { Products } from './products/products.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,getRepository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    
  ){}
  getHello(): string {
    return 'Hello World!';
  }
 
}
