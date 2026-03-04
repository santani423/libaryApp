"use client";

import Template from "@/components/layout/template";
import Link from "next/link";
import Image from "next/image";
import Img from "@/assets/images/image1.svg";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { ReviewList } from "@/components/section/ReviewList";
import { BookLists } from "@/components/section/BookLists";
import { useParams } from "next/navigation";
import { getBookDetail } from "@/lib/api/books";
import { useQuery } from "@tanstack/react-query";

export default function DetailPage() {
  const params = useParams();
  const { id } = params;

  const {
    data: bookDetail = null,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["bookDetail", id],
    queryFn: () => getBookDetail(Number(id)),
  });
  console.log("bookDetail", bookDetail);
  

  return (
    <Template>
      <div className="custom-container px-6 pt-3 md:px-28">
        <nav aria-label="Breadcrumb" className="text-sm font-medium">
          <ol className="flex items-center gap-2 text-gray-500">
            <li>
              <Link href="/" className="text-primary hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-400">
              &gt;
            </li>
            <li>
              <Link href="/category" className="text-primary hover:underline">
                Category
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-400">
              &gt;
            </li>
            <li className="text-gray-900">{bookDetail?.title}</li>
          </ol>
        </nav>
      </div>
      <div className="custom-container px-6 pt-3 md:px-28 lg:flex lg:gap-8">
        <div className="custom-container h-96 w-full flex justify-center items-center">
          <Image src={Img} alt="Detail Image" />
        </div>
        <div className="custom-container">
          <Button variant={"secondary"} className="font-bold">
            {bookDetail?.category?.name || "Unknown Category"}
          </Button>
          <h1 className="text-2xl font-bold mt-4">{bookDetail?.title || "Unknown Title"}</h1>
          <p className="mt-2 text-gray-600 font-bold">{bookDetail?.author?.name || "Unknown Author"}</p>
          <span className="mt-2 text-gray-600 font-bold flex items-center gap-1">
            <Star className="fill-yellow-500 text-yellow-500" /> {bookDetail?.rating ?? "N/A"}
          </span>

          <div className="custom-container flex  p-1 h-10 border-b justify-between w-full mt-4 border-gray-300 ">
            <div className="custom-container flex justify-center items-center text-center w-full">
              1
            </div>
            <div className="custom-container flex justify-center items-center text-center border-x border-gray-300 w-full">
              2
            </div>
            <div className="custom-container flex justify-center items-center text-center w-full">
              3
            </div>
          </div>

          <div className="custom-container mt-4 border-b border-gray-300 pb-4">
            <h2 className="text-xl font-bold mb-2">Description</h2>

            <p className="text-black ">
             {bookDetail?.description ?? ""}
            </p>
          </div>
        </div>
      </div>

      <ReviewList />
      <BookLists title="Related Books" />
    </Template>
  );
}
