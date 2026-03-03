import Template from "@/components/layout/template";
import { Card } from "@/components/ui/card";
import { Container,Book } from "lucide-react";
import { BookLists } from "@/components/section/BookLists";

export default function BookByAuthor() {
  return (
    <Template>
      <div className="custom-container px-6 pt-3 md:px-28">
        {" "}
        <Card className="w-full rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-2">
          <div className="cutom-container flex gap-4 item-center">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex justify-center items-center">
              <Container className="text-white" />
            </div>
            <div>
              <p className="font-bold">John Doe</p>
              <span className="custom-container flex gap-2 justify-center"><Book className="text-gray-600 w-4 h-4" /> 5 Books</span>
            </div>
          </div>
        </Card>
        <div className="custom-container grid grid-cols-12 gap-6 mt-4">
          {/* Right Column */}
          <div className="col-span-12 border-b border-gray-300 pb-4 md:col-span-9 xl:col-span-9">
            <BookLists />
          </div>
        </div>
      </div>
    </Template>
  );
}
