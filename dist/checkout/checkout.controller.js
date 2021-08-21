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
exports.CheckoutController = void 0;
const checkout_service_1 = require("./checkout.service");
const common_1 = require("@nestjs/common");
const CheckoutDetails_dto_1 = require("./dtos/CheckoutDetails.dto");
let CheckoutController = class CheckoutController {
    constructor(CheckoutService) {
        this.CheckoutService = CheckoutService;
    }
    CheckoutConfirmAndUpdateInventory(body) {
        console.log(body);
        return this.CheckoutService.CheckoutConfirmAndUpdateInventory(body.productIds, body.quantities);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CheckoutDetails_dto_1.CheckoutDetailsDto]),
    __metadata("design:returntype", void 0)
], CheckoutController.prototype, "CheckoutConfirmAndUpdateInventory", null);
CheckoutController = __decorate([
    common_1.Controller('checkout'),
    __metadata("design:paramtypes", [checkout_service_1.CheckoutService])
], CheckoutController);
exports.CheckoutController = CheckoutController;
//# sourceMappingURL=checkout.controller.js.map