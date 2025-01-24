import { Injectable, NotFoundException } from '@nestjs/common';  
import { InjectModel } from '@nestjs/sequelize';  
import { Transaction } from './transaction.model';  
  
@Injectable()  
export class TransactionService {  
  constructor(  
    @InjectModel(Transaction)  
    private transactionModel: typeof Transaction,  
  ) {}  
  
  async findAllByWalletId(walletId: number): Promise<Transaction[]> {  
    return this.transactionModel.findAll({ where: { walletId } });  
  }  
  
  async findOneById(walletId: number, transactionId: number): Promise<Transaction> {  
    const transaction = await this.transactionModel.findByPk(transactionId);  
    if (!transaction || transaction.walletId !== walletId) {  
      throw new NotFoundException('Transaction not found');  
    }  
  
    return transaction;  
  }  
}