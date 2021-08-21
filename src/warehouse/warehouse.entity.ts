import { SourcePrice } from './../sourceprice.entity';
import { Area } from './../area/area.entity';
import { Products } from './../products/products.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";

@Entity()
export class Warehouse{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    address: string;
    @OneToMany(()=> Area, (Area)=> Area.warehouse, {
        cascade: true,
    })
    @JoinColumn()
    area: Area[]
    @Column()
    contact: string;
    @OneToMany(()=> Products, (products)=> products.warehouse,  {
        cascade: true,
    })
    @JoinColumn()
    products: Products[]
    @OneToMany(()=> SourcePrice, (sourcePrice)=>sourcePrice.warehouse,  {
        cascade: true,
    })
    @JoinColumn()
    sourceprice: SourcePrice[]
}