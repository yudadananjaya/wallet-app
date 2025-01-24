import { IsNotEmpty, IsNumber, IsString, IsIn, IsOptional } from 'class-validator';  
  
export class CreateTransactionDto {  
  @IsNotEmpty()  
  @IsNumber()  
  amount: number;  
  
  @IsNotEmpty()  
  @IsString()  
  @IsIn(['deposit', 'withdraw'])  
  type: 'deposit' | 'withdraw';  
  
  @IsOptional()  
  @IsString()  
  description?: string;  
}