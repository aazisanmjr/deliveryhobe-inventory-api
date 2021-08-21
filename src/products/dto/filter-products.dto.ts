import { IsBoolean, IsNumber } from 'class-validator';

export class FilterProductsDto {
  @IsNumber()
  id!: number;
  @IsBoolean()
  byWareHouse: boolean;
  @IsBoolean()
  byArea: boolean;
}