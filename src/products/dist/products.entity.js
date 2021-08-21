"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Products = void 0;
var area_entity_1 = require("./../area/area.entity");
var warehouse_entity_1 = require("./../warehouse/warehouse.entity");
var typeorm_1 = require("typeorm");
var Products = /** @class */ (function () {
    function Products() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Products.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Products.prototype, "name");
    __decorate([
        typeorm_1.Column()
    ], Products.prototype, "price");
    __decorate([
        typeorm_1.Column()
    ], Products.prototype, "description");
    __decorate([
        typeorm_1.Column()
    ], Products.prototype, "inventory");
    __decorate([
        typeorm_1.ManyToOne(function () { return warehouse_entity_1.Warehouse; }, function (Warehouse) { return Warehouse.products; }),
        typeorm_1.JoinColumn()
    ], Products.prototype, "warehouse");
    __decorate([
        typeorm_1.ManyToOne(function () { return area_entity_1.Area; }, function (Area) { return Area.products; }),
        typeorm_1.JoinColumn()
    ], Products.prototype, "area");
    Products = __decorate([
        typeorm_1.Entity()
    ], Products);
    return Products;
}());
exports.Products = Products;
