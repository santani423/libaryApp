"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import Education from "@/assets/categoris/Education.svg";
import Fiction from "@/assets/categoris/Fiction.svg";
import History from "@/assets/categoris/History.svg";
import Science from "@/assets/categoris/Science.svg";
import Technology from "@/assets/categoris/Technology.svg";
import Finance from "@/assets/categoris/Finance.svg";
import NonFiction from "@/assets/categoris/Non-Fiction.svg";
import SelfImporvment from "@/assets/categoris/Self-Improvement.svg";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/lib/api/categories";

export function BookCategory() {
  const {
    data: categories = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) {
    return (
      <div className="custom-container px-6 md:px-28 bg-white">
        <div className="text-sm text-gray-500">Loading categories...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="custom-container px-6 md:px-28 bg-white">
        <div className="text-sm text-red-500">
          {(error as Error)?.message || "Failed to load categories."}
        </div>
      </div>
    );
  }

  return (
    <div className="custom-container px-6 md:px-28 bg-white">
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            <CardContent className="p-3 flex flex-col items-start gap-2">
              {/* Icon container */}
              <div className="w-full flex justify-center items-center bg-[#E0ECFF] h-16 rounded-md">
                <Image src={Logo} alt="Logo" width={40} height={40} />
              </div>

              {/* Title */}
              <div className="w-full text-left text-sm font-medium">
                {category.name}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
