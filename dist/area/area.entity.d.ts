import { Products } from './../products/products.entity';
import { Warehouse } from './../warehouse/warehouse.entity';
export declare class Area {
    id: number;
    name: string;
    warehouse: Warehouse;
    products: Products[];
}
