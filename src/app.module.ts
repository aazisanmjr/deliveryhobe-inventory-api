import { Area } from './area/area.entity';
import { Warehouse } from './warehouse/warehouse.entity';
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
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
      entities:[Products,Warehouse,Area],
      ssl: {
          rejectUnauthorized: false,
      }
    }),
  ],
  // controllers: [AppController, AuthController],
  // providers: [AppService],
})
export class AppModule {}
