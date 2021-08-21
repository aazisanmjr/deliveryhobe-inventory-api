import { SourcePrice } from './../sourceprice.entity';
import { Warehouse } from './../warehouse/warehouse.entity';
import { Area } from './../area/area.entity';
import { Products } from './products.entity';
import { Repository } from 'typeorm';
export declare class ProductsService {
    productRepo: Repository<Products>;
    areaRepo: Repository<Area>;
    warehouseRepo: Repository<Warehouse>;
    private sourcepriceRepo;
    constructor(productRepo: Repository<Products>, areaRepo: Repository<Area>, warehouseRepo: Repository<Warehouse>, sourcepriceRepo: Repository<SourcePrice>);
    getProductAll(): Promise<Products[]>;
    filterProductsByWarehouse(id: number): Promise<Products[]>;
    filterProductsByArea(id: number): Promise<Products[]>;
    SearchProducts(query: string): Promise<Products[]>;
}
