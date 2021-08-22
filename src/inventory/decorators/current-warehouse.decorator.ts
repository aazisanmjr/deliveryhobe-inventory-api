import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentWarehouse = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    console.log(request.session.warehouseId)

    return request.session.warehouseId
  },
);
