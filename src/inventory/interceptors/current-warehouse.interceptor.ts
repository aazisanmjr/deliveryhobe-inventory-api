import { InventoryService } from './../inventory.service';
import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class CurrentWarehouseInterceptor implements NestInterceptor {
  constructor(private usersService: InventoryService) {}

  async intercept(context: ExecutionContext, handler: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const { warehouseId } = request.session;

    if (warehouseId) {
      const user = await this.usersService.findOne(warehouseId);
      console.log(user)
      request.currentWarehouse = user;
    }
    return handler.handle();
  }
}
