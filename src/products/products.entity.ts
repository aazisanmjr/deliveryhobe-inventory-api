import { Area } from './../area/area.entity';
import { Warehouse } from './../warehouse/warehouse.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn,ManyToOne} from "typeorm";

@Entity()
export class Products{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    description: string;

    @Column()
    inventory: number;
    @ManyToOne(() => Warehouse, Warehouse=> Warehouse.products)
    @JoinColumn()
    warehouse: Warehouse;

    @ManyToOne(() => Area, Area=> Area.products)
    @JoinColumn()
    area: Area;
 }