export class CreateBookDto {
  title: string;
  author: string;
  publication_year: number;
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
