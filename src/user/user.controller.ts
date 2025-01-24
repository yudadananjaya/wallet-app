import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';  
import { UserService } from './user.service';  
import { CreateUserDto } from './dto/create-user.dto';  
import { UpdateUserDto } from './dto/update-user.dto';  
  
@Controller('users')  
export class UserController {  
  constructor(private readonly userService: UserService) {}  
  
  @Post()  
  create(@Body() createUserDto: CreateUserDto) {  
    return this.userService.create(createUserDto);  
  }  
  
  @Get()  
  findAll() {  
    return this.userService.findAll();  
  }  
  
  @Get(':id')  
  findOne(@Param('id') id: string) {  
    return this.userService.findOne(parseInt(id, 10));  
  }  
  
  @Put(':id')  
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {  
    return this.userService.update(parseInt(id, 10), updateUserDto);  
  }  
}