export interface CreateBook {
  title: string;
  author: string;
  publication_year: number;
  genre: string;
}

export type Book = { id: string } & CreateBook;

export interface UpdateBook {
  title?: string;
  author?: string;
  publication_year?: number;
  genre?: string;
}
