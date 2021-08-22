import { CurrentWarehouseInterceptor } from './interceptors/current-warehouse.interceptor';
import { Warehouse } from './../warehouse/warehouse.entity';
import { Products } from './../products/products.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthService } from '../auth/auth.service';

@Module({
  imports:[TypeOrmModule.forFeature([Products,Warehouse])],
  controllers: [InventoryController],

  providers: [InventoryService,
  AuthService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CurrentWarehouseInterceptor,
    }
  ],
})
export class InventoryModule {}
