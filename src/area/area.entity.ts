import { Products } from './../products/products.entity';
import { Warehouse } from './../warehouse/warehouse.entity';
import { Entity,ManyToOne,OneToMany, Column, PrimaryGeneratedColumn, JoinColumn } from "typeorm";

@Entity()
export class Area{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @ManyToOne(()=> Warehouse, (Warehouse)=> Warehouse.area)
    @JoinColumn()
    warehouse: Warehouse
    @OneToMany(()=> Products, (products)=> products.area)
    @JoinColumn()
    products: Products[]
}