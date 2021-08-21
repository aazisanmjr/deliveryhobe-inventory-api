import { Area } from './../area/area.entity';
import { Warehouse } from './../warehouse/warehouse.entity';
export declare class Products {
    id: number;
    name: string;
    price: number;
    description: string;
    inventory: number;
    warehouse: Warehouse;
    area: Area;
}
