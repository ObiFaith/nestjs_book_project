import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  publication_year: number;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  genre: string;
}

export class BookDto extends CreateBookDto {
  id: string;
}

export class UpdateBookDto {
  title?: string;
  author?: string;
  publication_year?: number;
  genre?: string;
}
