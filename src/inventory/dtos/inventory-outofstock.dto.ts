import {IsNumber, IsArray } from 'class-validator';

export class InventoryStockOutDto {

  @IsArray()
  productIds!:[number]
}