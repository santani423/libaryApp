import { API_BASE_URL } from "@/lib/api/config";
import { AuthorsApiResponse } from "@/types/author";
import { useState } from "react";

export async function getAuthorsPopular() {
  const response = await fetch(`${API_BASE_URL}/authors/popular`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = (await response.json().catch(() => ({}))) as AuthorsApiResponse;

  if (!response.ok || !data.success) {
    const message = data?.message || "Gagal mengambil penulis populer.";
    throw new Error(message);
  }

  return data.data?.authors ?? [];
}
