"use strict";
exports.__esModule = true;
exports.AuthGuard = void 0;
var AuthGuard = /** @class */ (function () {
    function AuthGuard() {
    }
    AuthGuard.prototype.canActivate = function (context) {
        var request = context.switchToHttp().getRequest();
        console.log(request.session.warehouseId);
        if (request.session.warehouseId) {
            return true;
        }
        else {
            return false;
        }
    };
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
