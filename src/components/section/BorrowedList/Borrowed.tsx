"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import Image1 from "@/assets/images/image1.svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type BorrowStatus = "active" | "returned" | "overdue";

type BorrowedBook = {
  id: number;
  title: string;
  author: string;
  category: string;
  borrowedDate: string;
  duration: string;
  dueDate: string;
  status: BorrowStatus;
};

const borrowedBooks: BorrowedBook[] = [
  {
    id: 1,
    title: "Book Name",
    author: "Author name",
    category: "Category",
    borrowedDate: "29 Aug 2025",
    duration: "Duration 3 Days",
    dueDate: "31 August 2025",
    status: "active",
  },
  {
    id: 2,
    title: "Book Name",
    author: "Author name",
    category: "Category",
    borrowedDate: "29 Aug 2025",
    duration: "Duration 3 Days",
    dueDate: "31 August 2025",
    status: "returned",
  },
  {
    id: 3,
    title: "Book Name",
    author: "Author name",
    category: "Category",
    borrowedDate: "29 Aug 2025",
    duration: "Duration 3 Days",
    dueDate: "31 August 2025",
    status: "overdue",
  },
];

const statusLabels: Record<BorrowStatus, string> = {
  active: "Active",
  returned: "Returned",
  overdue: "Overdue",
};

const statusClasses: Record<BorrowStatus, string> = {
  active: "bg-emerald-100 text-emerald-600",
  returned: "bg-lime-100 text-lime-700",
  overdue: "bg-rose-100 text-rose-600",
};

export default function Borrowed() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | BorrowStatus>("all");

  const filteredBooks = useMemo(() => {
    return borrowedBooks.filter((book) => {
      const matchFilter = filter === "all" ? true : book.status === filter;
      const normalizedQuery = query.toLowerCase();
      const matchSearch =
        book.title.toLowerCase().includes(normalizedQuery) ||
        book.author.toLowerCase().includes(normalizedQuery);

      return matchFilter && matchSearch;
    });
  }, [filter, query]);

  const filterButtons: Array<{ label: string; value: "all" | BorrowStatus }> = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Returned", value: "returned" },
    { label: "Overdue", value: "overdue" },
  ];

  return (
    <section className="w-full space-y-4 rounded-2xl   p-4">
      <h1 className="text-2xl font-semibold text-gray-900">Borrowed List</h1>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="search book"
          className="h-10 rounded-full bg-white pl-10"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {filterButtons.map((statusFilter) => {
          const isActive = filter === statusFilter.value;

          return (
            <Button
              key={statusFilter.value}
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setFilter(statusFilter.value)}
              className={`rounded-full border px-4 text-xs font-medium ${
                isActive
                  ? "border-blue-600 bg-blue-50 text-blue-600 hover:bg-blue-100"
                  : "bg-white text-gray-700"
              }`}
            >
              {statusFilter.label}
            </Button>
          );
        })}
      </div>

      <div className="space-y-3">
        {filteredBooks.map((book) => (
          <Card key={book.id} className="rounded-2xl border-gray-200 shadow-none">
            <CardContent className="space-y-4 p-4">
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Status</span>
                  <span
                    className={`rounded px-2 py-0.5 text-xs font-medium ${statusClasses[book.status]}`}
                  >
                    {statusLabels[book.status]}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Due Date</span>
                  <span className="rounded bg-rose-100 px-2 py-0.5 text-xs font-semibold text-rose-600">
                    {book.dueDate}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex min-w-[260px] flex-1 items-start gap-3">
                  <Image
                    src={Image1}
                    alt={book.title}
                    className="h-28 w-auto rounded-md border border-gray-200"
                  />

                  <div className="space-y-1.5">
                    <span className="rounded border border-gray-300 px-1.5 py-0.5 text-[10px] text-gray-600">
                      {book.category}
                    </span>
                    <h2 className="text-lg font-semibold text-gray-900">{book.title}</h2>
                    <p className="text-sm text-gray-500">{book.author}</p>
                    <p className="text-sm font-medium text-gray-700">
                      {book.borrowedDate} - <span>{book.duration}</span>
                    </p>
                  </div>
                </div>

                <Button className="h-10 rounded-full px-8 font-medium">Give Review</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center pt-1">
        <Button variant="outline" className="h-10 min-w-40 rounded-full px-8">
          Load More
        </Button>
      </div>
    </section>
  );
}
