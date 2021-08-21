import { IsString, IsNumber, IsArray } from 'class-validator';

export class InventoryStockOutDto {
  @IsNumber()
  warehouseId!: number
  @IsArray()
  productIds!:[number]
}