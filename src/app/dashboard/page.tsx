import Template from "@/components/layout/template";
import { HeroBanner } from "@/components/section/HeroBanner";
// import { useState } from "react";
export default function DashboardPage() {
//   const [bookCategory, setBookCategory] = useState<string | null>(null);
  return (
    <Template>
      <div className="custom-container flex justify-center items-center px-6 md:px-28 bg-white">
        <HeroBanner />
      </div>
    </Template>
  );
}
