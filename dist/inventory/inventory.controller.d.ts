import { InventoryStockOutDto } from './dtos/inventory-outofstock.dto';
import { InventoryService } from './inventory.service';
import { InventoryReStockDto } from '../inventory/dtos/inventory-restock.dto';
export declare class InventoryController {
    private readonly InventoryService;
    constructor(InventoryService: InventoryService);
    reStockInventory(body: InventoryReStockDto): Promise<"You don't have the permission to restock in these products id. \n            Either you don't have these products or You don't have permission to restock" | import("../products/products.entity").Products[]>;
    OutOfStockInventory(body: InventoryStockOutDto): Promise<import("../products/products.entity").Products[] | "You don't have the permission to mark out of stockmark out of stock in these products id. \n            Either you don't have these products or You don't have permission to mark out of stock">;
}
