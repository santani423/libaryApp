"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import type { Book } from "@/types/books";
import { useRouter } from "next/navigation";

type BookListsProps = {
  title?: string;
  books?: Book[];
};

export function BookLists({ title = "", books = [] }: BookListsProps) {


  const router = useRouter();

  const detailBook = (bookId: number) => {
    // Implementasi navigasi ke halaman detail buku
    router.push(`/detail/${bookId}`);
  };
  return (
    <section className="custom-container px-6 md:px-28 bg-white">
      {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {books.map((book, index) => {
          const imageSrc = book.coverImage?.startsWith("data:")
            ? book.coverImage
            : `data:image/jpeg;base64,${book.coverImage}`;

          return (
            <Card
              key={book.id ?? index}
              className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => detailBook(book.id)}
            >
              <CardContent className="flex flex-col p-3">
                <div className="relative w-full h-40 overflow-hidden bg-[#E0ECFF] rounded-md">
                  <Image
                    src={imageSrc}
                    alt={book.title ?? `Book ${index + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                <p className="text-sm font-medium text-left mt-2">
                  {book.title ?? `Book ${index + 1}`}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
