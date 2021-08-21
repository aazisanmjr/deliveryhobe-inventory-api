import { Warehouse } from './warehouse.entity';
import { Repository } from 'typeorm';
export declare class WarehouseService {
    private repo;
    constructor(repo: Repository<Warehouse>);
    getAll(): Promise<Warehouse[]>;
}
