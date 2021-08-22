import { CanActivate, ExecutionContext } from '@nestjs/common';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    console.log(request.session.warehouseId)
    if(request.session.warehouseId){
      return true;
    }else{
      return false
    }
    
  }
}
