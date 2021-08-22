import { CurrentWarehouse } from './decorators/current-warehouse.decorator';
import { AuthService } from '../auth/auth.service';
import { WarehouseSigninDto } from './dtos/warehouse-signin.dto';
import { InventoryStockOutDto } from './dtos/inventory-outofstock.dto';
import { InventoryService } from './inventory.service';
import { Body, Controller, Get, Post,Session, UseGuards, UseInterceptors } from '@nestjs/common';
import { InventoryReStockDto } from '../inventory/dtos/inventory-restock.dto';
import { AuthGuard } from 'src/guards/auth.guard';
@Controller('inventory')
export class InventoryController {
  
  constructor(private readonly InventoryService: InventoryService,
    private readonly authService: AuthService
    ) {}
    
  @Post('/signin')
  async signin(@Body() body: WarehouseSigninDto, @Session() session: any) {
    const user = await this.authService.signin(body.email, body.password);
    session.warehouseId = user.id;
    return user;
  }

  @Post('/signout')
  async signout(@Session() session: any) {
    session.warehouseId = null
    return "Signed Out"
  }
  // @Get('/current')
  // @UseGuards(AuthGuard)
  // async current(@CurrentWarehouse() warehouse:any) {
  //   console.log(warehouse,'controller')
  //   return warehouse
  // }

    @Post('/restock')
    @UseGuards(AuthGuard)
    reStockInventory(@Body() body: InventoryReStockDto,@Session() session: any) {
      console.log(body)
      return this.InventoryService.reStockInventory(session.warehouseId,body.productIds,body.newInventories)
    }
    @Post('/stockout')
    @UseGuards(AuthGuard)
    OutOfStockInventory(@Body() body: InventoryStockOutDto,@Session() session: any) {
      console.log(body)
      console.log(session)
      return this.InventoryService.OutOfStockInventory(session.warehouseId,body.productIds)
    }
}
