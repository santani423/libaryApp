import { API_BASE_URL } from "@/lib/api/config";
import type { BooksApiResponse } from "@/types/books";
import { useState } from "react";
 
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
