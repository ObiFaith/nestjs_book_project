import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { bookProvider } from './book.provider';
import { BookController } from './book.controller';

@Module({
  controllers: [BookController],
  providers: [BookService, ...bookProvider],
})
export class BookModule {}
