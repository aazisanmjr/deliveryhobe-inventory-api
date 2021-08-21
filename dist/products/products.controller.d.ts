import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly ProductsService;
    constructor(ProductsService: ProductsService);
    getProductAll(): Promise<import("./products.entity").Products[]>;
}
