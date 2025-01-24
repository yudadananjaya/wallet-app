import { Module } from '@nestjs/common';  
import { SequelizeModule } from '@nestjs/sequelize';  
import { UserController } from './user.controller';  
import { UserService } from './user.service';  
import { User } from './user.model';  
import { Wallet } from '../wallet/wallet.model';  
  
@Module({  
  imports: [SequelizeModule.forFeature([User, Wallet])],  
  controllers: [UserController],  
  providers: [UserService],  
  exports: [UserService],  
})  
export class UserModule {}