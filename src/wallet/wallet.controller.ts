import { Controller, Post, Body, Param, Get } from '@nestjs/common';  
import { WalletService } from './wallet.service';  
import { CreateTransactionDto } from './dto/create-transaction.dto';  
  
@Controller('wallets')  
export class WalletController {  
  constructor(private readonly walletService: WalletService) {}  
  
  @Post(':id/transactions')  
  createTransaction(@Param('id') id: string, @Body() createTransactionDto: CreateTransactionDto) {  
    const walletId = parseInt(id, 10);  
    return this.walletService.createTransaction(walletId, createTransactionDto);  
  }  
  
  @Get(':id/transactions')  
  findAllTransactions(@Param('id') id: string) {  
    const walletId = parseInt(id, 10);  
    return this.walletService.findAllTransactions(walletId);  
  }  
  
  @Get(':walletId/transactions/:transactionId')  
  findTransactionById(@Param('walletId') walletId: string, @Param('transactionId') transactionId: string) {  
    const walletIdInt = parseInt(walletId, 10);  
    const transactionIdInt = parseInt(transactionId, 10);  
    return this.walletService.findTransactionById(walletIdInt, transactionIdInt);  
  }  
}