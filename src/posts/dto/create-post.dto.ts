import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreatePostDto {
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  title: string = '';

  @IsNotEmpty()
  @IsString()
  @MaxLength(5000)
  body: string = '';
}
