"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Container, Star } from "lucide-react";

export function ReviewList() {
  const cards = Array.from({ length: 10 });
  return (
    <div className="custom-container  px-6 pt-3 md:px-28">
      <h2 className="text-2xl font-bold mt-4">Revew</h2>
      <span className="mt-2 text-gray-600 font-bold flex items-center gap-1">
        <Star className="fill-yellow-500 text-yellow-500" /> 4.5 (24 Ulasan)
      </span>

      <div className="custom-container mt-4 border-b border-gray-300 pb-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-2">
        {cards.map((_, index) => (
          <Card
            key={index}
            className="rounded-xl border border-gray-200 p-2 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="custom-container flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex justify-center items-center">
                <Container className="text-white" />
              </div>
              <div>
                <p className="font-bold">John Doe</p>
                <p className="text-sm text-gray-600">5 hari yang lalu</p>
              </div>
            </div>
            <div className="custom-container flex mt-4 gap-1 items-center">
              <Star className="fill-yellow-500 text-yellow-500" />
              <Star className="fill-yellow-500 text-yellow-500" />
              <Star className="fill-yellow-500 text-yellow-500" />
              <Star className="fill-yellow-500 text-yellow-500" />
            </div>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
