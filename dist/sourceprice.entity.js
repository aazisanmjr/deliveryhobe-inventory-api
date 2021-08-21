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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourcePrice = void 0;
const warehouse_entity_1 = require("./warehouse/warehouse.entity");
const typeorm_1 = require("typeorm");
const products_entity_1 = require("./products/products.entity");
let SourcePrice = class SourcePrice {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], SourcePrice.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToOne(() => products_entity_1.Products),
    typeorm_1.JoinColumn(),
    __metadata("design:type", products_entity_1.Products)
], SourcePrice.prototype, "product", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], SourcePrice.prototype, "sourcePrice", void 0);
__decorate([
    typeorm_1.ManyToOne(() => warehouse_entity_1.Warehouse, Warehouse => Warehouse.products),
    typeorm_1.JoinColumn(),
    __metadata("design:type", warehouse_entity_1.Warehouse)
], SourcePrice.prototype, "warehouse", void 0);
SourcePrice = __decorate([
    typeorm_1.Entity()
], SourcePrice);
exports.SourcePrice = SourcePrice;
//# sourceMappingURL=sourceprice.entity.js.map