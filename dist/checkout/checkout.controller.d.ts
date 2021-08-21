import { CheckoutService } from './checkout.service';
import { CheckoutDetailsDto } from './dtos/CheckoutDetails.dto';
export declare class CheckoutController {
    private readonly CheckoutService;
    constructor(CheckoutService: CheckoutService);
    CheckoutConfirmAndUpdateInventory(body: CheckoutDetailsDto): Promise<import("../products/products.entity").Products[]>;
}
