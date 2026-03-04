import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAuthorsPopular } from "@/lib/api/author";
import { Book, Container, Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
export function PopularAuthors() {
  const {
    data: authors = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["authors"],
    queryFn: getAuthorsPopular,
  });
 

  return (
    <div className="custom-container px-6 pt-3 md:px-28 ">
      <h2 className="text-lg font-semibold mb-4">Popular Authors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-4">
        {authors?.map((item, i) => {
          return (
            <Card
              key={i}
              className="rounded-xl border border-gray-200 p-2 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="custom-container flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex justify-center items-center">
                  <Container className="text-white" />
                </div>
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-gray-600"> <Book className="inline-block " /> {item.bookCount} books</p>
                </div>
              </div> 
            </Card>
          );
        })}
      </div>
    </div>
  );
}
