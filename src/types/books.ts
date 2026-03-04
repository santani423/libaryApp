export type Author = {
  id: number;
  name: string;
};

export type Category = {
  id: number;
  name: string;
};

export type Book = {
  id: number;
  title: string;
  description: string;
  isbn: string;
  publishedYear: number;
  coverImage: string;
  rating: number;
  reviewCount: number;
  totalCopies: number;
  availableCopies: number;
  borrowCount: number;
  authorId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  author: Author;
  category: Category;
};

export type BooksApiResponse = {
  success: boolean;
  message: string;
  data?: {
    books?: Book[];
  };
};
export type BooksDetailApiResponse = {
  success: boolean;
  message: string;
  data?: Book | null;
};
