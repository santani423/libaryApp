import Template from "@/components/layout/template";
import { HeroBanner } from "@/components/section/HeroBanner";
import { BookCategory } from "@/components/section/BookCategory";
import { RecommendationBook } from "@/components/section/RecommendationBook";
import { PopularAuthors } from "@/components/section/PopularAuthors";
// import { useState } from "react";
export default function DashboardPage() {
//   const [bookCategory, setBookCategory] = useState<string | null>(null);
  return (
    <Template>
      <div className="custom-container justify-center items-center md:px-28 bg-white">
        <HeroBanner />
        <BookCategory />
        <RecommendationBook />
        <PopularAuthors />
      </div>
    </Template>
  );
}
