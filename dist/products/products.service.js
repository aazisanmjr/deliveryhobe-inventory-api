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
exports.ProductsService = void 0;
const sourceprice_entity_1 = require("./../sourceprice.entity");
const warehouse_entity_1 = require("./../warehouse/warehouse.entity");
const area_entity_1 = require("./../area/area.entity");
const products_entity_1 = require("./products.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ProductsService = class ProductsService {
    constructor(productRepo, areaRepo, warehouseRepo, sourcepriceRepo) {
        this.productRepo = productRepo;
        this.areaRepo = areaRepo;
        this.warehouseRepo = warehouseRepo;
        this.sourcepriceRepo = sourcepriceRepo;
    }
    async getProductAll() {
        return this.productRepo.find();
    }
    async filterProductsByWarehouse(id) {
        return this.productRepo.find({
            where: { warehouse: { id: id } },
        });
    }
    async filterProductsByArea(id) {
        return this.productRepo.find({
            where: { area: { id: id } },
        });
    }
    async SearchProducts(query) {
        return this.productRepo.find({
            where: [
                { name: typeorm_2.ILike(`%${query}%`) },
                { description: typeorm_2.ILike(`%${query}%`) },
            ],
        });
    }
};
ProductsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(products_entity_1.Products)),
    __param(1, typeorm_1.InjectRepository(area_entity_1.Area)),
    __param(2, typeorm_1.InjectRepository(warehouse_entity_1.Warehouse)),
    __param(3, typeorm_1.InjectRepository(sourceprice_entity_1.SourcePrice)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map