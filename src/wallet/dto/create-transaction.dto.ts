import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';  
  
export class CreateTransactionDto {  
  @IsNotEmpty()  
  @IsNumber()  
  amount: number;  
  
  @IsNotEmpty()  
  @IsString()  
  type: string;
  
  @IsOptional()  
  @IsString()  
  description?: string;  
}