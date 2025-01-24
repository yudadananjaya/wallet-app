import { Module } from '@nestjs/common';  
import { SequelizeModule } from '@nestjs/sequelize';  
import { Wallet } from './wallet.model';  
import { WalletService } from './wallet.service';  
import { WalletController } from './wallet.controller';  
import { Transaction } from '../transaction/transaction.model';  
import { TransactionModule } from '../transaction/transaction.module';  
  
@Module({  
  imports: [  
    SequelizeModule.forFeature([Wallet, Transaction]),  
    TransactionModule,  
  ],  
  providers: [WalletService],  
  controllers: [WalletController],  
  exports: [WalletService],  
})  
export class WalletModule {}