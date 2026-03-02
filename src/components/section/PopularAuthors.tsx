import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export function PopularAuthors() {
  return (
    <div className="custom-container px-6 pt-3 md:px-28 ">
      <h2 className="text-lg font-semibold mb-4">Popular Authors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card
            key={index}
            className="rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            <CardHeader>
              <CardTitle>Author {index + 1}</CardTitle>
              <CardDescription>Author description goes here.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="custom-container flex justify-between">

              </div>
            </CardContent> 
          </Card>
        ))}
      </div>
    </div>
  );
}
