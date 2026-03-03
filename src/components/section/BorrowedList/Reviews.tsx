"use client";

import Image from "next/image";
import { Search, Star } from "lucide-react";
import { useMemo, useState } from "react";

import Image1 from "@/assets/images/image1.svg";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type ReviewItem = {
  id: number;
  date: string;
  title: string;
  author: string;
  category: string;
  rating: number;
  review: string;
};

const reviews: ReviewItem[] = [
  {
    id: 1,
    date: "25 August 2025, 13:38",
    title: "Book Name",
    author: "Author name",
    category: "Category",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur. Pulvinar porttitor aliquam viverra nunc sed facilisis. Integer tristique nullam morbi mauris ante.",
  },
  {
    id: 2,
    date: "25 August 2025, 13:38",
    title: "Book Name",
    author: "Author name",
    category: "Category",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur. Pulvinar porttitor aliquam viverra nunc sed facilisis. Integer tristique nullam morbi mauris ante.",
  },
  {
    id: 3,
    date: "25 August 2025, 13:38",
    title: "Book Name",
    author: "Author name",
    category: "Category",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur. Pulvinar porttitor aliquam viverra nunc sed facilisis. Integer tristique nullam morbi mauris ante.",
  },
];

export default function Reviews() {
  const [query, setQuery] = useState("");

  const filteredReviews = useMemo(() => {
    const normalizedQuery = query.toLowerCase();

    return reviews.filter((item) => {
      return (
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.author.toLowerCase().includes(normalizedQuery) ||
        item.review.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [query]);

  return (
    <section className="w-full space-y-4 rounded-2xl p-4">
      <h1 className="text-2xl font-semibold text-gray-900">Reviews</h1>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search Reviews"
          className="h-10 rounded-full bg-white pl-10"
        />
      </div>

      <div className="space-y-3">
        {filteredReviews.map((item) => (
          <Card key={item.id} className="rounded-2xl border-gray-200 shadow-none">
            <CardContent className="space-y-3 p-4">
              <p className="text-xs text-gray-600">{item.date}</p>

              <div className="border-b border-gray-200" />

              <div className="flex items-start gap-3">
                <Image
                  src={Image1}
                  alt={item.title}
                  className="h-24 w-auto rounded-sm border border-gray-200"
                />

                <div className="space-y-1">
                  <span className="rounded border border-gray-300 px-1.5 py-0.5 text-[10px] text-gray-600">
                    {item.category}
                  </span>
                  <h2 className="text-base font-semibold text-gray-900">{item.title}</h2>
                  <p className="text-sm text-gray-500">{item.author}</p>
                </div>
              </div>

              <div className="border-b border-gray-200" />

              <div className="flex items-center gap-1">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={`${item.id}-${index}`} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-xs leading-5 text-gray-700">{item.review}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
