import { InventoryService } from './inventory.service';
import { InventoryReStockDto } from './dtos/InventoryRestock.dto';
export declare class InventoryController {
    private readonly InventoryService;
    constructor(InventoryService: InventoryService);
    reStockInventory(body: InventoryReStockDto): any;
}
