"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WarehouseModule = void 0;
var products_entity_1 = require("./../products/products.entity");
var typeorm_1 = require("@nestjs/typeorm");
var common_1 = require("@nestjs/common");
var warehouse_entity_1 = require("./warehouse.entity");
var warehouse_controller_1 = require("./warehouse.controller");
var warehouse_service_1 = require("./warehouse.service");
var WarehouseModule = /** @class */ (function () {
    function WarehouseModule() {
    }
    WarehouseModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([warehouse_entity_1.Warehouse]), products_entity_1.Products],
            controllers: [warehouse_controller_1.WarehouseController],
            providers: [warehouse_service_1.WarehouseService]
        })
    ], WarehouseModule);
    return WarehouseModule;
}());
exports.WarehouseModule = WarehouseModule;
