import { Warehouse } from './warehouse/warehouse.entity';
import { Products } from "./products/products.entity";
export declare class SourcePrice {
    id: number;
    product: Products;
    sourcePrice: number;
    warehouse: Warehouse;
}
