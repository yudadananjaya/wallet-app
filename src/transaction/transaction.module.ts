import { Module } from '@nestjs/common';  
import { SequelizeModule } from '@nestjs/sequelize';  
import { Transaction } from './transaction.model';  
  
@Module({  
  imports: [SequelizeModule.forFeature([Transaction])],  
  providers: [],  
  controllers: [],  
  exports: [],  
})  
export class TransactionModule {}