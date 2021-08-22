import { IsEmail, IsString } from 'class-validator';

export class WarehouseSigninDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
