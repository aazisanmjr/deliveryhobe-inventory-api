import { Products } from './../products/products.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InventoryService {
    constructor(@InjectRepository(Products) public productRepo: Repository<Products>){}
    async reStockInventory(wareHouseId: number,productIds: [number],newInventories:[number] ){
        const products = await this.productRepo.findByIds(productIds,{
            where:{warehouse:{id:wareHouseId}}
        })
        if(!products.length){
            return `You don't have the permission to restock in these products id. 
            Either you don't have these products or You don't have permission to restock`  
        } else{
        products.map(async (item,key)=>{
            await this.productRepo.update(item.id, { inventory:newInventories[key] })
            return item
        })
        let data = await this.productRepo.findByIds(productIds)
        return data
        }
        
        
    }
    async OutOfStockInventory(wareHouseId: number,productIds: [number]){
        const products = await this.productRepo.findByIds(productIds,{
            where:{warehouse:{id:wareHouseId}}
        })
        if(!products.length){
            return `You don't have the permission to mark out of stockmark out of stock in these products id. 
            Either you don't have these products or You don't have permission to mark out of stock`  
        } else{
        products.map(async (item,key)=>{
            await this.productRepo.update(item.id, { inventory:0 })
            return item
        })
        let data = await this.productRepo.findByIds(productIds)
        return data
        }
    }
}
