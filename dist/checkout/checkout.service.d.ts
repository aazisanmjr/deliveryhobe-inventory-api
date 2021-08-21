import { Products } from './../products/products.entity';
import { Repository } from 'typeorm';
export declare class CheckoutService {
    productRepo: Repository<Products>;
    constructor(productRepo: Repository<Products>);
    CheckoutConfirmAndUpdateInventory(productIds: [number], quantities: [number]): Promise<Products[]>;
}
