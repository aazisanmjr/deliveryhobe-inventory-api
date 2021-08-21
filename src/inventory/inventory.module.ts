import { Products } from './../products/products.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';

@Module({
  imports:[TypeOrmModule.forFeature([Products])],
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {}
