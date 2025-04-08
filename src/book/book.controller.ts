import {
  Get,
  Body,
  Post,
  Patch,
  Param,
  Delete,
  HttpCode,
  Controller,
} from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto, CreateBookDto, UpdateBookDto } from './dto';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  getBooks(): Array<BookDto> {
    return this.bookService.getBooks();
  }

  @Get(':id')
  getBook(@Param('id') id: string): BookDto {
    return this.bookService.getBook(id);
  }

  @HttpCode(201)
  @Post()
  createBook(@Body() createBookDto: CreateBookDto): BookDto {
    return this.bookService.createBook(createBookDto);
  }

  @Patch(':id')
  updateBook(
    @Param('id') id: string,
    @Body() updateBook: UpdateBookDto,
  ): BookDto {
    return this.bookService.updateBook(id, updateBook);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    return this.bookService.deleteBook(id);
  }
}
