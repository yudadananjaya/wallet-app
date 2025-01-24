import { Controller, Get, Param } from '@nestjs/common';  
import { StockService } from './stock.service';  

@Controller('stocks')  
export class StockController {  
  constructor(private readonly stockService: StockService) {}  

  @Get(':symbol')  
  async getStockData(@Param('symbol') symbol: string) {  
    return this.stockService.getStockData(symbol);  
  }  
}