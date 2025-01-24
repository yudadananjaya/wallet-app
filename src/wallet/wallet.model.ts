import { Table, Model, Column, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';  
import { User } from '../user/user.model';  
import { Transaction } from '../transaction/transaction.model';  
  
@Table  
export class Wallet extends Model<Wallet> {  
  @Column({  
    type: DataType.FLOAT,  
    allowNull: false,  
    defaultValue: 0.0,  
  })  
  balance: number;  
  
  @ForeignKey(() => User)  
  @Column({  
    type: DataType.INTEGER,  
    allowNull: false,  
  })  
  userId: number;  
  
  @BelongsTo(() => User)  
  user: User;  
  
  @HasMany(() => Transaction)  
  transactions: Transaction[];  
}