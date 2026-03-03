import { API_BASE_URL } from "@/lib/api/config";

export type Category = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

type CategoriesApiResponse = {
  success: boolean;
  message: string;
  data?: {
    categories?: Category[];
  };
};

export async function getCategories() {
  const response = await fetch(`${API_BASE_URL}/categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = (await response.json().catch(() => ({}))) as CategoriesApiResponse;

  if (!response.ok || !data.success) {
    const message = data?.message || "Gagal mengambil kategori.";
    throw new Error(message);
  }

  return data.data?.categories ?? [];
}