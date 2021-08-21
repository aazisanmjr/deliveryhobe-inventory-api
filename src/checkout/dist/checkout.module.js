"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CheckoutModule = void 0;
var typeorm_1 = require("@nestjs/typeorm");
var products_entity_1 = require("./../products/products.entity");
var common_1 = require("@nestjs/common");
var checkout_controller_1 = require("./checkout.controller");
var checkout_service_1 = require("./checkout.service");
var CheckoutModule = /** @class */ (function () {
    function CheckoutModule() {
    }
    CheckoutModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([products_entity_1.Products])],
            controllers: [checkout_controller_1.CheckoutController],
            providers: [checkout_service_1.CheckoutService]
        })
    ], CheckoutModule);
    return CheckoutModule;
}());
exports.CheckoutModule = CheckoutModule;
