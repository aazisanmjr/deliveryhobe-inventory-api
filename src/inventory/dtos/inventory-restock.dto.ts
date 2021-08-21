import { IsString, IsNumber, IsArray } from 'class-validator';

export class InventoryReStockDto {
  @IsNumber()
  warehouseId!: number
  @IsArray()
  productIds!:[number]
  @IsArray()
  newInventories!:[number]
}