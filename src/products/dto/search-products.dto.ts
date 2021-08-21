import { IsString } from 'class-validator';

export class SearchProductsDto {
  @IsString()
  query!: string
}