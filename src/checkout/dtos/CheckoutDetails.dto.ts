import { IsString, IsNumber, IsArray } from 'class-validator';

export class CheckoutDetailsDto {
  @IsString()
  customerName!: string
  @IsString()
  customerPhone!: string
  @IsArray()
  productIds!:[number]
  @IsArray()
  quantities!:[number]
}