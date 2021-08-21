import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './../products/products.entity';
import { Module } from '@nestjs/common';
import { CheckoutController } from './checkout.controller';
import { CheckoutService } from './checkout.service';

@Module({
  imports:[TypeOrmModule.forFeature([Products])],
  controllers: [CheckoutController],
  providers: [CheckoutService]
})
export class CheckoutModule {}
