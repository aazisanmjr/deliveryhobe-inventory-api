"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ProductsService = void 0;
var sourceprice_entity_1 = require("./../sourceprice.entity");
var warehouse_entity_1 = require("./../warehouse/warehouse.entity");
var area_entity_1 = require("./../area/area.entity");
var products_entity_1 = require("./products.entity");
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var typeorm_2 = require("typeorm");
var ProductsService = /** @class */ (function () {
    function ProductsService(productRepo, areaRepo, warehouseRepo, sourcepriceRepo) {
        this.productRepo = productRepo;
        this.areaRepo = areaRepo;
        this.warehouseRepo = warehouseRepo;
        this.sourcepriceRepo = sourcepriceRepo;
    }
    // async setSeed() {
    //     const warehouse =this.warehouseRepo.create({
    //     name:'Mohammedpur Warehouse',
    //     contact:'023828124',
    //     address:'House#, Road#5,  , Dhanmondi, Dhaka',
    //     })
    //     const area1 = this.areaRepo.create({name:'Dhannmondi'})
    //     await this.areaRepo.save(area1)
    //     const product1 = this.productRepo.create({name:'BIC Lighter (Small)', price:60,description:'Child-resistant, Safe and reliable, 100% Quality Inspected Up to 2 times the lights vs. the next full size leading brand Every BIC lighter undergoes more than 50 separate, automatic quality checks during the manufacturing process Assortment of colors may vary No lighter is child-proof. There is no substitute for proper adult supervision. Read all warnings before using this product. Flick it Safely.',inventory:32 })
    //     await  this.productRepo.save(product1)
    //     const sourceprice1 = this.sourcepriceRepo.create({sourcePrice:55})
    //     sourceprice1.product = product1
    //     await  this.sourcepriceRepo.save(sourceprice1)
    //     const product2 = this.productRepo.create({name:'Metal Grinder- Large', price:800,description:'This Designer grinder will help grind away anything you need with ease Possible uses: 1. Paper Shredder 2. Grinding Masala & Spices',inventory:21})
    //     await  this.productRepo.save(product2)
    //     const sourceprice2 = this.sourcepriceRepo.create({sourcePrice:700})
    //     sourceprice1.product = product2
    //     await  this.sourcepriceRepo.save(sourceprice2)
    //     await  this.productRepo.save(product1)
    //     warehouse.products=[product1,product2]
    //     // warehouse.sourcing_price=product1
    //     warehouse.area=[area1]
    //     warehouse.sourceprice=[sourceprice1,sourceprice2]
    //     // this.warehouseRepo.update({products:product1})
    //     await this.warehouseRepo.save(warehouse)
    //     console.log(warehouse)
    //     const users = await getRepository(Warehouse)
    //         .createQueryBuilder("Warehouse")
    //         .getMany();
    //         return users
    // }
    ProductsService.prototype.getProductAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, typeorm_2.getRepository(products_entity_1.Products)
                            .createQueryBuilder("user")
                            .getMany()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                }
            });
        });
    };
    ProductsService.prototype.getOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.warehouseRepo.findOne(id, {
                        relations: ['products', 'area', 'sourceprice']
                    })];
            });
        });
    };
    ProductsService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(products_entity_1.Products)),
        __param(1, typeorm_1.InjectRepository(area_entity_1.Area)),
        __param(2, typeorm_1.InjectRepository(warehouse_entity_1.Warehouse)),
        __param(3, typeorm_1.InjectRepository(sourceprice_entity_1.SourcePrice))
    ], ProductsService);
    return ProductsService;
}());
exports.ProductsService = ProductsService;