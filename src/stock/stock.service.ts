import { Injectable } from '@nestjs/common';  
import { HttpService } from '@nestjs/axios';  
import { firstValueFrom } from 'rxjs';  
import { ConfigService } from '@nestjs/config';  

@Injectable()  
export class StockService {  
  private readonly apiKey: string;  
  private readonly host: string;  

  constructor(  
    private readonly httpService: HttpService,  
    private readonly configService: ConfigService,  
  ) {  
    this.apiKey = this.configService.get<string>('RAPIDAPI_KEY') || '';  
    this.host = this.configService.get<string>('RAPIDAPI_HOST') || '';  
  }  

  async getStockData(symbol: string) {  
    const url = 'https://latest-stock-price.p.rapidapi.com/equities-enhanced?Symbols=GODRCONS.NS';  
    const headers = {  
      'x-rapidapi-key': this.apiKey,  
      'x-rapidapi-host': this.host,
    };  

    const response = await firstValueFrom(  
      this.httpService.get(url, { headers }),  
    );  

    return response.data;  
  }  
}