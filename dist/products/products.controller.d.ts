import { FilterProductsDto } from './dto/filter-products.dto';
import { ProductsService } from './products.service';
import { SearchProductsDto } from './dto/search-products.dto';
export declare class ProductsController {
    private readonly ProductsService;
    constructor(ProductsService: ProductsService);
    getProductAll(): Promise<import("./products.entity").Products[]>;
    filterProducts(body: FilterProductsDto): Promise<import("./products.entity").Products[]> | "select filter type by area or warehouse";
    SearchProducts(body: SearchProductsDto): Promise<import("./products.entity").Products[]>;
}
