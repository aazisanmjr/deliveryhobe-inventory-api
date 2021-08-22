"use strict";
exports.__esModule = true;
exports.CurrentWarehouse = void 0;
var common_1 = require("@nestjs/common");
exports.CurrentWarehouse = common_1.createParamDecorator(function (data, context) {
    var request = context.switchToHttp().getRequest();
    console.log(request.session.warehouseId);
    return request.session.warehouseId;
});
