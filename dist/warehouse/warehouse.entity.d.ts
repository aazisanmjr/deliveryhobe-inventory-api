import { SourcePrice } from './../sourceprice.entity';
import { Area } from './../area/area.entity';
import { Products } from './../products/products.entity';
export declare class Warehouse {
    id: number;
    name: string;
    address: string;
    area: Area[];
    contact: string;
    products: Products[];
    sourceprice: SourcePrice[];
}
