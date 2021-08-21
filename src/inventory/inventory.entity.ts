import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Inventory{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    quantity: number;
    @Column()
    stockOut: boolean
}