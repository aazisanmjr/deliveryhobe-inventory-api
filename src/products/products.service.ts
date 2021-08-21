import { SourcePrice } from './../sourceprice.entity';
import { Warehouse } from './../warehouse/warehouse.entity';
import { Area } from './../area/area.entity';
import { Products } from './products.entity';
import { Injectable, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository,getConnection, Repository,Like, ILike } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(
    @InjectRepository(Products) public productRepo: Repository<Products>,
    @InjectRepository(Area) public areaRepo: Repository<Area>,
    @InjectRepository(Warehouse) public  warehouseRepo: Repository<Warehouse>,
    @InjectRepository(SourcePrice) private  sourcepriceRepo: Repository<SourcePrice> ){}
    // async setSeed() {
        
    //     const warehouse =this.warehouseRepo.create({
    //     name:'Mirpur Warehouse',
    //     contact:'023828124',
    //     address:'House#, Road#5,  , Dhanmondi, Dhaka',
    //     })

    //     const area1 = this.areaRepo.create({name:'Mirpur'})

    //     const product1 = this.productRepo.create({name:'Sunlite Gas Lighter S', price:15,description:'Smoking is injurious to health This product is not to be  sold to anyone under the age of 18.',inventory:12 })
    //     await  this.productRepo.save(product1)

    //     const sourceprice1 = this.sourcepriceRepo.create({sourcePrice:12})
    //     sourceprice1.product = product1
    //     await  this.sourcepriceRepo.save(sourceprice1)

    //     const product2 = this.productRepo.create({name:'555', price:450,description:`Brand Family: 505
    //         Product Type: Cigarettes
    //         Stick Count: 20
    //         Noncompliant Health Warning Label: Not assessed`,inventory:31})
    //     await  this.productRepo.save(product2)

    //     const sourceprice2 = this.sourcepriceRepo.create({sourcePrice:700})
    //     sourceprice1.product = product2
    //     await  this.sourcepriceRepo.save(sourceprice2)
        
    //     await  this.productRepo.save(product1)
    //     area1.products=[product1,product2]
    //     await this.areaRepo.save(area1)

    //     warehouse.products=[product1,product2]
    //     // warehouse.sourcing_price=product1
    //     warehouse.area=[area1]
    //     warehouse.sourceprice=[sourceprice1,sourceprice2]

    //     // this.warehouseRepo.update({products:product1})
    //     await this.warehouseRepo.save(warehouse)
        
    //     console.log(warehouse)
    //     const users = await getRepository(Warehouse)
    //         .createQueryBuilder("Warehouse")
    //         .getMany();
    //         return users
    // }
    async getProductAll (){
        return this.productRepo.find()
    }
    async filterProductsByWarehouse(id : number){
        return this.productRepo.find({
            where:{warehouse:{ id:id}},
        })
    }
    async filterProductsByArea(id : number){
        return this.productRepo.find({
            where:{area:{ id:id}},
        })
    }
    async SearchProducts(query : string){
        return this.productRepo.find({
         where: [
        { name: ILike(`%${query}%`)},
        { description: ILike(`%${query}%`) },
    ],
        })

    }
}
