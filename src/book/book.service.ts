import { Repository } from 'typeorm';
import { Book } from 'src/entity/book.entity';
import { CreateBook, UpdateBook } from './interface';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BookService {
  constructor(
    @Inject('BOOK_REPOSITORY')
    private bookRepo: Repository<Book>,
  ) {}

  async getBooks(): Promise<Array<Book>> {
    return await this.bookRepo.find();
  }

  async getBook(bookId: string): Promise<Book> {
    const book = await this.bookRepo.findOneBy({ id: bookId });
    if (!book) throw new NotFoundException('Book not found!');
    return book;
  }

  async createBook(book: CreateBook): Promise<Book> {
    const newBook = this.bookRepo.create(book);
    await this.bookRepo.save(newBook);
    return newBook;
  }

  async updateBook(bookId: string, updateBook: UpdateBook): Promise<Book> {
    await this.bookRepo.update(bookId, updateBook);
    return await this.getBook(bookId);
  }

  async deleteBook(bookId: string) {
    await this.bookRepo.delete(bookId);
  }
}
