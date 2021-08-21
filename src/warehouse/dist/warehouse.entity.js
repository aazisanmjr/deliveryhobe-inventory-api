"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Warehouse = void 0;
var sourceprice_entity_1 = require("./../sourceprice.entity");
var area_entity_1 = require("./../area/area.entity");
var products_entity_1 = require("./../products/products.entity");
var typeorm_1 = require("typeorm");
var Warehouse = /** @class */ (function () {
    function Warehouse() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Warehouse.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Warehouse.prototype, "name");
    __decorate([
        typeorm_1.Column()
    ], Warehouse.prototype, "address");
    __decorate([
        typeorm_1.OneToMany(function () { return area_entity_1.Area; }, function (Area) { return Area.warehouse; }, {
            cascade: true
        }),
        typeorm_1.JoinColumn()
    ], Warehouse.prototype, "area");
    __decorate([
        typeorm_1.Column()
    ], Warehouse.prototype, "contact");
    __decorate([
        typeorm_1.OneToMany(function () { return products_entity_1.Products; }, function (products) { return products.warehouse; }, {
            cascade: true
        }),
        typeorm_1.JoinColumn()
    ], Warehouse.prototype, "products");
    __decorate([
        typeorm_1.OneToMany(function () { return sourceprice_entity_1.SourcePrice; }, function (sourcePrice) { return sourcePrice.warehouse; }, {
            cascade: true
        }),
        typeorm_1.JoinColumn()
    ], Warehouse.prototype, "sourceprice");
    Warehouse = __decorate([
        typeorm_1.Entity()
    ], Warehouse);
    return Warehouse;
}());
exports.Warehouse = Warehouse;
