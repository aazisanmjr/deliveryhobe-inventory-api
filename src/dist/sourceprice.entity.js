"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SourcePrice = void 0;
var warehouse_entity_1 = require("./warehouse/warehouse.entity");
var typeorm_1 = require("typeorm");
var products_entity_1 = require("./products/products.entity");
var SourcePrice = /** @class */ (function () {
    function SourcePrice() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], SourcePrice.prototype, "id");
    __decorate([
        typeorm_1.OneToOne(function () { return products_entity_1.Products; }),
        typeorm_1.JoinColumn()
    ], SourcePrice.prototype, "product");
    __decorate([
        typeorm_1.Column()
    ], SourcePrice.prototype, "sourcePrice");
    __decorate([
        typeorm_1.ManyToOne(function () { return warehouse_entity_1.Warehouse; }, function (Warehouse) { return Warehouse.products; }),
        typeorm_1.JoinColumn()
    ], SourcePrice.prototype, "warehouse");
    SourcePrice = __decorate([
        typeorm_1.Entity()
    ], SourcePrice);
    return SourcePrice;
}());
exports.SourcePrice = SourcePrice;
