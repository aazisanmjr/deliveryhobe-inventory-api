import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getInventorry(): string;
    getProducts(): string;
    getwarehouse(): string;
}
