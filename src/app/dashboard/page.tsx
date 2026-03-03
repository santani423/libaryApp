"use client";
import Template from "@/components/layout/template";
import { HeroBanner } from "@/components/section/HeroBanner";
import { BookCategory } from "@/components/section/BookCategory";
import { BookLists } from "@/components/section/BookLists";
import { PopularAuthors } from "@/components/section/PopularAuthors";
import { useQuery } from "@tanstack/react-query";

import { getBookRecommendations } from "@/lib/api/books";
// import { useState } from "react";
export default function DashboardPage() {
  //   const [bookCategory, setBookCategory] = useState<string | null>(null);
  const {
    data: bookRecommendations = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["bookRecommendations"],
    queryFn: getBookRecommendations,
  });
  console.log("DashboardPageBookRecommendations", bookRecommendations);
  
  return (
    <Template>
      <div className="custom-container justify-center items-center md:px-28 bg-white pb-6">
        <HeroBanner />
        <BookCategory />
        <BookLists title="Recommended Books" books={bookRecommendations ?? []} />
        <PopularAuthors />
      </div>
    </Template>
  );
}
