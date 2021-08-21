import { SourcePrice } from './../sourceprice.entity';
import { Warehouse } from './../warehouse/warehouse.entity';
import { Area } from './../area/area.entity';
import { Products } from './products.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository,getConnection, Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(
    @InjectRepository(Products) public productRepo: Repository<Products>,
    @InjectRepository(Area) public areaRepo: Repository<Area>,
    @InjectRepository(Warehouse) public  warehouseRepo: Repository<Warehouse>,
    @InjectRepository(SourcePrice) private  sourcepriceRepo: Repository<SourcePrice> ){}
    // async setSeed() {
        
    //     const warehouse =this.warehouseRepo.create({
    //     name:'Mohammedpur Warehouse',
    //     contact:'023828124',
    //     address:'House#, Road#5,  , Dhanmondi, Dhaka',
    //     })

    //     const area1 = this.areaRepo.create({name:'Dhannmondi'})
    //     await this.areaRepo.save(area1)

    //     const product1 = this.productRepo.create({name:'BIC Lighter (Small)', price:60,description:'Child-resistant, Safe and reliable, 100% Quality Inspected Up to 2 times the lights vs. the next full size leading brand Every BIC lighter undergoes more than 50 separate, automatic quality checks during the manufacturing process Assortment of colors may vary No lighter is child-proof. There is no substitute for proper adult supervision. Read all warnings before using this product. Flick it Safely.',inventory:32 })
    //     await  this.productRepo.save(product1)

    //     const sourceprice1 = this.sourcepriceRepo.create({sourcePrice:55})
    //     sourceprice1.product = product1
    //     await  this.sourcepriceRepo.save(sourceprice1)

    //     const product2 = this.productRepo.create({name:'Metal Grinder- Large', price:800,description:'This Designer grinder will help grind away anything you need with ease Possible uses: 1. Paper Shredder 2. Grinding Masala & Spices',inventory:21})
    //     await  this.productRepo.save(product2)

    //     const sourceprice2 = this.sourcepriceRepo.create({sourcePrice:700})
    //     sourceprice1.product = product2
    //     await  this.sourcepriceRepo.save(sourceprice2)
        
    //     await  this.productRepo.save(product1)
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
        const users = await getRepository(Products)
        .createQueryBuilder("user")
        .getMany();
        return users
    }
    async getOne(id : number){
        return this.warehouseRepo.findOne(id,{
            relations:['products','area','sourceprice'],
        })
    }
}
