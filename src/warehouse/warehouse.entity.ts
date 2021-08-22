import { SourcePrice } from './../sourceprice/sourceprice.entity';
import { Area } from './../area/area.entity';
import { Products } from './../products/products.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, ManyToMany, JoinTable, Unique } from "typeorm";
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

@Entity()
export class Warehouse{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name!: string;

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

    @Column()
    @Length(6, 30, { message: 'The password must be at least 6 but not longer than 30 characters' })
    @IsNotEmpty({ message: 'The password is required' })
    password!: string;

    @Column({ name: 'email' })
    @IsEmail({}, { message: 'Incorrect email' })
    @IsNotEmpty({ message: 'The email is required' })
    email!: string;
}