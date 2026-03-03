import Template from "@/components/layout/template";
import FilterForm from "@/components/section/FilterForm";
import { Card } from "@/components/ui/card";
import { BookLists } from "@/components/section/BookLists";
export default function Category() {
  return (
    <Template>
      <div className="custom-container px-6 pt-3 md:px-28">
        <h1 className="text-2xl font-bold mt-4">Books List</h1>
        <Card className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-3 mt-4 md:hidden xl:hidden">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">Filter</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-black"
              aria-hidden="true"
            >
              <line x1="5" y1="6" x2="19" y2="6" />
              <line x1="7" y1="12" x2="17" y2="12" />
              <line x1="9" y1="18" x2="15" y2="18" />
            </svg>
          </div>
        </Card>
        <div className="custom-container grid grid-cols-12 gap-6 mt-4">
          {/* Left Column */}
          <div className="col-span-2 border-b border-gray-300 pb-4">
            <FilterForm />
          </div>

          {/* Right Column */}
          <div className="col-span-10 border-b border-gray-300 pb-4">
            <BookLists />
          </div>
        </div>
      </div>
    </Template>
  );
}
