import { API_BASE_URL } from "@/lib/api/config";

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

type BooksApiResponse = {
  success: boolean;
  message: string;
  data?: {
    books?: Book[];
  };
};

export async function getBooks() {
  const response = await fetch(`${API_BASE_URL}/books`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = (await response.json().catch(() => ({}))) as BooksApiResponse;

  if (!response.ok || !data.success) {
    const message = data?.message || "Gagal mengambil buku.";
    throw new Error(message);
  }

  return data.data?.books ?? [];
}

export async function getBookRecommendations() {
  const response = await fetch(`${API_BASE_URL}/books/recommend`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = (await response.json().catch(() => ({}))) as BooksApiResponse;

  if (!response.ok || !data.success) {
    const message = data?.message || "Gagal mengambil rekomendasi buku.";
    throw new Error(message);
  }

  return data.data?.books ?? [];
}
