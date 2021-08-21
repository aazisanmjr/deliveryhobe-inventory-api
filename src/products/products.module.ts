import { SourcePrice } from './../sourceprice.entity';
import { Area } from './../area/area.entity';
import { Warehouse } from './../warehouse/warehouse.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Products } from './products.entity';
@Module({
  imports:[TypeOrmModule.forFeature([Products,Warehouse,Area,SourcePrice])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
