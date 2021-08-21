import { Products } from './../products/products.entity';
import { Repository } from 'typeorm';
export declare class InventoryService {
    productRepo: Repository<Products>;
    constructor(productRepo: Repository<Products>);
    reStockInventory(wareHouseId: number, productIds: [number], newInventories: [number]): Promise<Products[] | "You don't have the permission to restock in these products id. \n            Either you don't have these products or You don't have permission to restock">;
    OutOfStockInventory(wareHouseId: number, productIds: [number]): Promise<Products[] | "You don't have the permission to mark out of stockmark out of stock in these products id. \n            Either you don't have these products or You don't have permission to mark out of stock">;
}
