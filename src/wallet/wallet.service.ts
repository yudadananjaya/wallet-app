import { Injectable, NotFoundException } from '@nestjs/common';  
import { InjectModel } from '@nestjs/sequelize';  
import { Wallet } from './wallet.model';  
import { Transaction } from '../transaction/transaction.model';  
import { CreateTransactionDto } from './dto/create-transaction.dto';  
  
@Injectable()  
export class WalletService {  
  constructor(  
    @InjectModel(Wallet)  
    private walletModel: typeof Wallet,  
    @InjectModel(Transaction)  
    private transactionModel: typeof Transaction,  
  ) {}  
  
  async createTransaction(walletId: number, createTransactionDto: CreateTransactionDto) {  
    const wallet = await this.walletModel.findByPk(walletId);  
    if (!wallet) {  
      throw new NotFoundException('Wallet not found');  
    }  
  
    if (createTransactionDto.type === 'withdraw' && wallet.balance < createTransactionDto.amount) {  
      throw new Error('Insufficient balance');  
    }  
  
    const transaction = new this.transactionModel();
    transaction.amount = createTransactionDto.amount;
    if (createTransactionDto.type !== 'deposit' && createTransactionDto.type !== 'withdraw') {
      throw new Error('Invalid transaction type');
    }
    transaction.type = createTransactionDto.type;
    transaction.description = createTransactionDto.description || '';
    transaction.walletId = walletId;
  
    await transaction.save();  
  
    if (createTransactionDto.type === 'deposit') {  
      wallet.balance += createTransactionDto.amount;  
    } else if (createTransactionDto.type === 'withdraw') {  
      wallet.balance -= createTransactionDto.amount;  
    }  
  
    await wallet.save();  
    return transaction;  
  }  
  
  async findAllTransactions(walletId: number): Promise<Transaction[]> {  
    const wallet = await this.walletModel.findByPk(walletId, {  
      include: [Transaction],  
    });  
    if (!wallet) {  
      throw new NotFoundException('Wallet not found');  
    }  
  
    return wallet.transactions;  
  }  
  
  async findTransactionById(walletId: number, transactionId: number): Promise<Transaction> {  
    const wallet = await this.walletModel.findByPk(walletId, {  
      include: [Transaction],  
    });  
    if (!wallet) {  
      throw new NotFoundException('Wallet not found');  
    }  
  
    const transaction = wallet.transactions.find(t => t.id === transactionId);  
    if (!transaction) {  
      throw new NotFoundException('Transaction not found');  
    }  
  
    return transaction;  
  }  
}