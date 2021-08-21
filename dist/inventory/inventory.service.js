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
exports.InventoryService = void 0;
const products_entity_1 = require("./../products/products.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let InventoryService = class InventoryService {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    async reStockInventory(wareHouseId, productIds, newInventories) {
        const products = await this.productRepo.findByIds(productIds, {
            where: { warehouse: { id: wareHouseId } }
        });
        if (!products.length) {
            return `You don't have the permission to restock in these products id. 
            Either you don't have these products or You don't have permission to restock`;
        }
        else {
            products.map(async (item, key) => {
                await this.productRepo.update(item.id, { inventory: newInventories[key] });
                return item;
            });
            let data = await this.productRepo.findByIds(productIds);
            return data;
        }
    }
    async OutOfStockInventory(wareHouseId, productIds) {
        const products = await this.productRepo.findByIds(productIds, {
            where: { warehouse: { id: wareHouseId } }
        });
        if (!products.length) {
            return `You don't have the permission to mark out of stockmark out of stock in these products id. 
            Either you don't have these products or You don't have permission to mark out of stock`;
        }
        else {
            products.map(async (item, key) => {
                await this.productRepo.update(item.id, { inventory: 0 });
                return item;
            });
            let data = await this.productRepo.findByIds(productIds);
            return data;
        }
    }
};
InventoryService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(products_entity_1.Products)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InventoryService);
exports.InventoryService = InventoryService;
//# sourceMappingURL=inventory.service.js.map