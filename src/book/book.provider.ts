import { DataSource } from 'typeorm';
import { Book } from 'src/entity/book.entity';

export const bookProvider = [
  {
    provide: 'BOOK_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Book),
    inject: ['DATA_SOURCE'],
  },
];
