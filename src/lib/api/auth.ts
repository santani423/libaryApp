import { API_BASE_URL } from "@/lib/api/config";

export type RegisterRequest = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

export type RegisterResponse = {
  message?: string;
  [key: string]: unknown;
};

export async function registerUser(payload: RegisterRequest) {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => ({}))) as RegisterResponse;

  if (!response.ok) {
    const message = data?.message || "Register gagal. Coba lagi.";
    throw new Error(message);
  }

  return data;
}
