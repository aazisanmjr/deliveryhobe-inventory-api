import { Products } from './../products/products.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CheckoutService {
    
    constructor(@InjectRepository(Products) public productRepo: Repository<Products>){}

    async CheckoutConfirmAndUpdateInventory(productIds: [number],quantities:[number] ){
        const products = await this.productRepo.findByIds(productIds)
       
        products.map(async (item,key)=>{
            await this.productRepo.update(item.id, { inventory: item.inventory - quantities[key] })
            return item
        })
        
        return this.productRepo.findByIds(productIds)
    }
}
