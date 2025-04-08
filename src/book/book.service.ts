import { books } from './constant';
import { Book, CreateBook, UpdateBook } from './type';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BookService {
  private books: Array<Book> = books;

  getBooks(): Array<Book> {
    return this.books;
  }

  getBook(bookId: string): Book {
    const book = this.books.find((book) => book.id === bookId);
    if (!book) throw new NotFoundException('Book not found!');
    return book;
  }

  createBook(book: CreateBook): Book {
    const bookIds = this.books.map((book) => Number(book.id));
    const newBookId = Math.max(...bookIds) + 1;

    const newBook = { id: String(newBookId), ...book };
    this.books.push(newBook);

    return newBook;
  }

  updateBook(bookId: string, updateBook: UpdateBook): Book {
    const bookIndex = this.books.findIndex((book) => book.id === bookId);
    if (bookIndex === -1) throw new NotFoundException('Book not found!');

    this.books[bookIndex] = { ...this.books[bookIndex], ...updateBook };

    return this.books[bookIndex];
  }

  deleteBook(bookId: string) {
    const books = this.books.filter((book) => book.id !== bookId);
    this.books = books;
  }
}
