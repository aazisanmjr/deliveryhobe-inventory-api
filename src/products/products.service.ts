import { SourcePrice } from './../sourceprice/sourceprice.entity';
import { Warehouse } from './../warehouse/warehouse.entity';
import { Area } from './../area/area.entity';
import { Products } from './products.entity';
import { Injectable, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository,getConnection, Repository,Like, ILike } from 'typeorm';
import { randomBytes, scrypt as _scrypt} from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt)
@Injectable()
export class ProductsService {
    constructor(
    @InjectRepository(Products) public productRepo: Repository<Products>,
    @InjectRepository(Area) public areaRepo: Repository<Area>,
    @InjectRepository(Warehouse) public  warehouseRepo: Repository<Warehouse>,
    @InjectRepository(SourcePrice) private  sourcepriceRepo: Repository<SourcePrice> ){}
    
    // async setSeed() {

    //     const salt = randomBytes(8).toString('hex');

    //     // Hash the salt and the password together
    //     //1 mirpur123
    //     //2 mohammadpur123

    //     const hash = (await scrypt('uttara123', salt, 32)) as Buffer;

    //     // Join the hashed result and the salt together
    //     const result = salt + '.' + hash.toString('hex');
    //     const warehouse =this.warehouseRepo.create({
    //     name:'Uttara Warehouse',
    //     contact:'02382812d4',
    //     address:'House#, Road#5,  , Uttara, Dhaka',
    //     email:'uttara@warehouse.com',
    //     password:result
    //     })

    //     const area1 = this.areaRepo.create({name:'Uttara'})

    //     const product1 = this.productRepo.create({name:'Gold Leaf', price:200,description:'Hig quality  gold leaf ! Smoking is injurious to health This product is not to be  sold to anyone under the age of 18.',inventory:12 })
    //     await  this.productRepo.save(product1)

    //     const sourceprice1 = this.sourcepriceRepo.create({sourcePrice:180})
    //     sourceprice1.product = product1
    //     await  this.sourcepriceRepo.save(sourceprice1)

    //     const product2 = this.productRepo.create({name:'RAW Organic Hemp', price:150,description:`RAW Organic Hemp single wide cut corners rolling paper.`,inventory:31})
    //     await  this.productRepo.save(product2)

    //     const sourceprice2 = this.sourcepriceRepo.create({sourcePrice:100})
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
