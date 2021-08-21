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
exports.Warehouse = void 0;
const sourceprice_entity_1 = require("./../sourceprice.entity");
const area_entity_1 = require("./../area/area.entity");
const products_entity_1 = require("./../products/products.entity");
const typeorm_1 = require("typeorm");
let Warehouse = class Warehouse {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Warehouse.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Warehouse.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Warehouse.prototype, "address", void 0);
__decorate([
    typeorm_1.OneToMany(() => area_entity_1.Area, (Area) => Area.warehouse, {
        cascade: true,
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], Warehouse.prototype, "area", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Warehouse.prototype, "contact", void 0);
__decorate([
    typeorm_1.OneToMany(() => products_entity_1.Products, (products) => products.warehouse, {
        cascade: true,
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], Warehouse.prototype, "products", void 0);
__decorate([
    typeorm_1.OneToMany(() => sourceprice_entity_1.SourcePrice, (sourcePrice) => sourcePrice.warehouse, {
        cascade: true,
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], Warehouse.prototype, "sourceprice", void 0);
Warehouse = __decorate([
    typeorm_1.Entity()
], Warehouse);
exports.Warehouse = Warehouse;
//# sourceMappingURL=warehouse.entity.js.map