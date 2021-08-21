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
exports.WarehouseService = void 0;
const warehouse_entity_1 = require("./warehouse.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let WarehouseService = class WarehouseService {
    constructor(repo) {
        this.repo = repo;
    }
    async getAll() {
        await typeorm_2.getConnection()
            .createQueryBuilder()
            .insert()
            .into(warehouse_entity_1.Warehouse)
            .values([
            {
                name: 'Dhaka Warehouse',
                area: [{ name: 'Mipur' }, { name: 'Dhanmondi' }],
                address: 'House#, Road#5, Block-Dha, Pallabi, Mirpur-12, Dhaka-1216',
                contact: '+880182984933',
                products: [
                    { name: 'Benson & Hedges', price: 10, description: 'Smoking Kills! Traditional Benson & Hedges', inventory: 332 },
                    { name: 'Gold Leaf', price: 5, description: 'Smoking Kills! Traditional Gold Leaf', inventory: 211 },
                ],
            }
        ])
            .execute();
        const users = await typeorm_2.getRepository(warehouse_entity_1.Warehouse)
            .createQueryBuilder("Warehouse")
            .getMany();
        return users;
    }
};
WarehouseService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(warehouse_entity_1.Warehouse)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WarehouseService);
exports.WarehouseService = WarehouseService;
//# sourceMappingURL=warehouse.service.js.map