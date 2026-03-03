import Template from "@/components/layout/template";
import Link from "next/link";
import Image from "next/image";
import Img from "@/assets/images/image1.svg";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { ReviewList } from "@/components/section/ReviewList";
import { BookLists } from "@/components/section/BookLists";

export default function DetailPage() {
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
            <li className="text-gray-900">The Psychology of Money</li>
          </ol>
        </nav>
      </div>
      <div className="custom-container px-6 pt-3 md:px-28">
        <div className="custom-container h-96 w-full flex justify-center items-center">
          <Image src={Img} alt="Detail Image" />
        </div>
        <div className="custom-container">
          <Button variant={"natural"} className="font-bold">
            Buisnis & Economics
          </Button>
          <h1 className="text-2xl font-bold mt-4">The Psychology of Money</h1>
          <p className="mt-2 text-gray-600 font-bold">Morgan Housel</p>
          <span className="mt-2 text-gray-600 font-bold flex items-center gap-1">
            <Star className="fill-yellow-500 text-yellow-500" /> 4.5
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              voluptate, doloremque, cumque, deleniti corporis consequatur
              voluptate, doloremque, cumque, deleniti corporis consequatur
              voluptate, doloremque, cumque, deleniti corporis consequatur
              voluptate, doloremque, cumque, deleniti corporis consequatur
              voluptate, doloremque, cumque, deleniti corporis consequatur
              voluptate, doloremque, cumque, deleniti corporis consequatur
              voluptate, doloremque, cumque, deleniti corporis consequatur
            </p>
          </div>
        </div>
      </div>

      <ReviewList />
      <BookLists title="Related Books" />
    </Template>
  );
}
