import { Injectable, NotFoundException } from '@nestjs/common';  
import { InjectModel } from '@nestjs/sequelize';  
import { User } from './user.model';  
import { Wallet } from '../wallet/wallet.model';  
import { CreateUserDto } from './dto/create-user.dto';  
import { UpdateUserDto } from './dto/update-user.dto';  
  
@Injectable()  
export class UserService {  
  constructor(  
    @InjectModel(User)  
    private userModel: typeof User,  
    @InjectModel(Wallet)  
    private walletModel: typeof Wallet,  
  ) {}  
  
  async create(createUserDto: CreateUserDto): Promise<User> {  
    const user = new User();  
    user.username = createUserDto.username;  
    user.password = createUserDto.password;  
  
    await user.save();  
  
    const wallet = new Wallet();  
    wallet.userId = user.id;  
  
    await wallet.save();  
  
    return user;  
  }  
  
  async findAll(): Promise<User[]> {  
    return this.userModel.findAll();  
  }  
  
  async findOne(id: number): Promise<User> {  
    const user = await this.userModel.findByPk(id, {  
      include: [Wallet],  
    });  
    if (!user) {  
      throw new NotFoundException('User not found');  
    }  
    return user;  
  }  
  
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {  
    const user = await this.findOne(id);  
  
    user.username = updateUserDto.username || user.username;  
    user.password = updateUserDto.password || user.password;  
  
    await user.save();  
  
    return user;  
  }  
}