import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }
  // @Get('/setallget')
  // setSeed(){
  //   return this.appService.setSeed();
  // }
  @Get('/inventorry')
  getInventorry(): string {
    return this.appService.getInventorry();
  }
  @Get('/products')
  getProducts(): string {
    return this.appService.getProducts();
  }
  @Get('/warehouse')
  getwarehouse(): string {
    return 'noooo ware house';
  }
}
