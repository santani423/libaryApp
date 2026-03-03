"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import type { Book } from "@/types/books";

type BookListsProps = {
  title?: string;
  books?: Book[];
};

export function BookLists({ title = "", books = [] }: BookListsProps) {
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
              className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <CardContent className="flex flex-col gap-2">
                <div className="w-full flex justify-center items-center   h-32 rounded-md overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={book.title ?? `Book ${index + 1}`}
                    width={80}
                    height={120}
                    className="object-cover"
                    unoptimized
                  />
                </div>

                <p className="text-sm font-medium text-left">
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
