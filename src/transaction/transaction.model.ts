import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';  
import { Wallet } from '../wallet/wallet.model';  
  
@Table  
export class Transaction extends Model<Transaction> {  
  @Column({  
    type: DataType.FLOAT,  
    allowNull: false,  
  })  
  amount: number;  
  
  @Column({  
    type: DataType.ENUM('deposit', 'withdraw'),  
    allowNull: false,  
  })  
  type: 'deposit' | 'withdraw';  
  
  @Column({  
    type: DataType.STRING,  
    allowNull: true,  
  })  
  description: string;  
  
  @ForeignKey(() => Wallet)  
  @Column({  
    type: DataType.INTEGER,  
    allowNull: false,  
  })  
  walletId: number;  
  
  @BelongsTo(() => Wallet)  
  wallet: Wallet;  
}