import { Controller, Get, Param } from '@nestjs/common';  
import { TransactionService } from './transaction.service';  
import { Transaction } from './transaction.model';  
  
@Controller('wallets/:walletId/transactions')  
export class TransactionController {  
  constructor(private readonly transactionService: TransactionService) {}  
  
  @Get()  
  findAll(@Param('walletId') walletId: string) {  
    return this.transactionService.findAllByWalletId(parseInt(walletId, 10));  
  }  
  
  @Get(':transactionId')  
  findOne(@Param('walletId') walletId: string, @Param('transactionId') transactionId: string) {  
    return this.transactionService.findOneById(parseInt(walletId, 10), parseInt(transactionId, 10));  
  }  
}