import { Area } from './area/area.entity';
import { Warehouse } from './warehouse/warehouse.entity';
import { Inventory } from './inventory/inventory.entity';
import { Products } from './products/products.entity';
import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './inventory/inventory.module';
import { CheckoutModule } from './checkout/checkout.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    InventoryModule,
    CheckoutModule,
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://wwnpaxiofxyenv:40f419660a3a79d06d8819ccb7bfb2306097792b810e5e7fc073c49e24d76be8@ec2-18-211-97-89.compute-1.amazonaws.com:5432/dcu6fbbleieoo5',
      autoLoadEntities: true,
      synchronize: true,
      entities:[Products,Inventory,Warehouse,Area],
      ssl: {
          rejectUnauthorized: false,
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
