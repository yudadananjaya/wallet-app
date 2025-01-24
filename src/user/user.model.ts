import { Table, Model, Column, DataType, HasOne } from 'sequelize-typescript';  
import { Wallet } from '../wallet/wallet.model';  
  
@Table  
export class User extends Model<User> {  
  @Column({  
    type: DataType.STRING,  
    allowNull: false,  
  })  
  username: string;  
  
  @Column({  
    type: DataType.STRING,  
    allowNull: false,  
  })  
  password: string;  
  
  @HasOne(() => Wallet)  
  wallet: Wallet;  
}