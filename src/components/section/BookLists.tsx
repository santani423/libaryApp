"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";

type BookListsProps = {
  title?: string;
};

export function BookLists({ title = "" }: BookListsProps) {
  const cards = Array.from({ length: 10 });

  return (
    <section className="custom-container px-6 md:px-28 bg-white">

      {title && (
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {cards.map((_, index) => (
          <Card
            key={index}
            className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <CardContent className="p-3 flex flex-col gap-2">
              <div className="w-full flex justify-center items-center bg-gray-100 h-20 rounded-md">
                <Image
                  src={Logo}
                  alt={`Book ${index + 1}`}
                  width={40}
                  height={40}
                />
              </div>

              <p className="text-sm font-medium text-left">Book {index + 1}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
