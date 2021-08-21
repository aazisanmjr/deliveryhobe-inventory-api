"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var area_entity_1 = require("./area/area.entity");
var warehouse_entity_1 = require("./warehouse/warehouse.entity");
var products_entity_1 = require("./products/products.entity");
var common_1 = require("@nestjs/common");
var config_1 = require("@nestjs/config");
var typeorm_1 = require("@nestjs/typeorm");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var inventory_module_1 = require("./inventory/inventory.module");
var checkout_module_1 = require("./checkout/checkout.module");
var products_module_1 = require("./products/products.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                config_1.ConfigModule.forRoot({ isGlobal: true }),
                inventory_module_1.InventoryModule,
                checkout_module_1.CheckoutModule,
                products_module_1.ProductsModule,
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'postgres',
                    url: process.env.DATABASE_URL,
                    autoLoadEntities: true,
                    synchronize: true,
                    entities: [products_entity_1.Products, warehouse_entity_1.Warehouse, area_entity_1.Area],
                    ssl: {
                        rejectUnauthorized: false
                    }
                }),
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
