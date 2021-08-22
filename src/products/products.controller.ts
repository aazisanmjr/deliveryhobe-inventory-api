import { FilterProductsDto } from './dto/filter-products.dto';
import { ProductsService } from './products.service';
import { Controller, Get, Post ,Body} from '@nestjs/common';
import { query } from 'express';
import { SearchProductsDto } from './dto/search-products.dto';

@Controller('products')
export class ProductsController {

    constructor(private readonly ProductsService: ProductsService) {}

    @Get()
    getProductAll() {
        return this.ProductsService.getProductAll();
    }

    @Post()
    filterProducts(@Body() body: FilterProductsDto) {
        console.log(body)
        if(body.byWareHouse)return this.ProductsService.filterProductsByWarehouse(body.id)
        if(body.byArea) return this.ProductsService.filterProductsByArea(body.id)
        return 'select filter type by area or warehouse'
    }

    @Post('/search')
    SearchProducts(@Body() body: SearchProductsDto) {
        console.log(body)
        return this.ProductsService.SearchProducts(body.query)
    }
    
}
