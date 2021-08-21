import { Warehouse } from './warehouse/warehouse.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn,ManyToOne} from "typeorm";
import { Products } from "./products/products.entity";
@Entity()
export class SourcePrice{
    @PrimaryGeneratedColumn()
    id:number
    @OneToOne(()=>Products)
    @JoinColumn()
    product:Products
    @Column()
    sourcePrice:number
    @ManyToOne(() => Warehouse, Warehouse=> Warehouse.products)
    @JoinColumn()
    warehouse: Warehouse;
}