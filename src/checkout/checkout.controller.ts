import { CheckoutService } from './checkout.service';
import { Body, Controller, Post } from '@nestjs/common';
import { CheckoutDetailsDto } from './dtos/CheckoutDetails.dto';

@Controller('checkout')
export class CheckoutController {

    constructor(private readonly CheckoutService: CheckoutService) {}

    @Post()
    
    CheckoutConfirmAndUpdateInventory(@Body() body: CheckoutDetailsDto) {
        console.log(body)
        return this.CheckoutService.CheckoutConfirmAndUpdateInventory(body.productIds,body.quantities)
  }
}
