"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const filter_products_dto_1 = require("./dto/filter-products.dto");
const products_service_1 = require("./products.service");
const common_1 = require("@nestjs/common");
const search_products_dto_1 = require("./dto/search-products.dto");
let ProductsController = class ProductsController {
    constructor(ProductsService) {
        this.ProductsService = ProductsService;
    }
    getProductAll() {
        return this.ProductsService.getProductAll();
    }
    filterProducts(body) {
        console.log(body);
        if (body.byWareHouse)
            return this.ProductsService.filterProductsByWarehouse(body.id);
        if (body.byArea)
            return this.ProductsService.filterProductsByArea(body.id);
        return 'select filter type by area or warehouse';
    }
    SearchProducts(body) {
        console.log(body);
        return this.ProductsService.SearchProducts(body.query);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProductAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_products_dto_1.FilterProductsDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "filterProducts", null);
__decorate([
    common_1.Post('/search'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_products_dto_1.SearchProductsDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "SearchProducts", null);
ProductsController = __decorate([
    common_1.Controller('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map