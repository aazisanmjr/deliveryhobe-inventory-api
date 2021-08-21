import { InventoryStockOutDto } from './dtos/inventory-outofstock.dto';
import { InventoryService } from './inventory.service';
import { Body, Controller, Post } from '@nestjs/common';
import { InventoryReStockDto } from '../inventory/dtos/inventory-restock.dto';

@Controller('inventory')
export class InventoryController {
     constructor(private readonly InventoryService: InventoryService) {}
    @Post('/restock')
    reStockInventory(@Body() body: InventoryReStockDto) {
        console.log(body)
        return this.InventoryService.reStockInventory(body.warehouseId,body.productIds,body.newInventories)
  }
  @Post('/stockout')
    OutOfStockInventory(@Body() body: InventoryStockOutDto) {
        console.log(body)
        return this.InventoryService.OutOfStockInventory(body.warehouseId,body.productIds)
  }
}
