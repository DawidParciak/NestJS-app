import { Length, IsNotEmpty, IsString, IsUUID, isString, isUUID } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(5, 20)
  client: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  productId: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 50)
  address: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  clientId: string;
}
