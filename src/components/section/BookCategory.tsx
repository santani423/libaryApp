import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";


export function BookCategory() {
  const cards = Array.from({ length: 6 });

  return (
    <div className="custom-container px-6 md:px-28 bg-white">
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {cards.map((_, index) => (
          <Card
            key={index}
            className="rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            <CardContent className="p-3 flex flex-col items-start gap-2">
              
              {/* Icon container */}
              <div className="w-full flex justify-center items-center bg-gray-100 h-16 rounded-md">
                <Image src={Logo} alt="Logo" width={40} height={40} />
              </div>

              {/* Title */}
              <div className="w-full text-left text-sm font-medium">
                Card {index + 1}
              </div>

            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}