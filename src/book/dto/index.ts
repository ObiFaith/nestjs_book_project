import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'The Hobbit' })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'J.R.R. Tolkien' })
  author: string;

  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty({ example: 1937 })
  publication_year: number;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty({ example: 'Science Fiction' })
  genre: string;
}

export class BookDto extends CreateBookDto {
  id: string;
}

export class UpdateBookDto {
  @ApiProperty({ example: 'The Lord of the Rings' })
  title?: string;

  @ApiProperty({ example: 'J.R.R. Tolkien' })
  author?: string;

  @ApiProperty({ example: 1954 })
  publication_year?: number;

  @ApiProperty({ example: 'Fantasy' })
  genre?: string;
}
