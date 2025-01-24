import { Module } from '@nestjs/common';  
import { ConfigModule, ConfigService } from '@nestjs/config';  
import { SequelizeModule } from '@nestjs/sequelize';  
import { User } from './user/user.model';  
import { Wallet } from './wallet/wallet.model';  
import { Transaction } from './transaction/transaction.model';  
import { UserModule } from './user/user.module';  
import { WalletModule } from './wallet/wallet.module';  
import { StockModule } from './stock/stock.module';  
import { TransactionModule } from './transaction/transaction.module';

@Module({  
  imports: [  
    ConfigModule.forRoot({  
      isGlobal: true,  
    }),  
    SequelizeModule.forRootAsync({  
      imports: [ConfigModule],  
      useFactory: (configService: ConfigService) => ({  
        dialect: 'postgres',  
        host: configService.get('DATABASE_HOST'),  
        port: configService.get<number>('DATABASE_PORT'),  
        username: configService.get('DATABASE_USERNAME'),  
        password: configService.get('DATABASE_PASSWORD'),  
        database: configService.get('DATABASE_NAME'),  
        models: [User, Wallet, Transaction],  
        autoLoadModels: true,  
        synchronize: true, 
      }),  
      inject: [ConfigService],  
    }),  
    UserModule,  
    WalletModule,  
    StockModule,
    TransactionModule,  
  ],  
})  
export class AppModule {}