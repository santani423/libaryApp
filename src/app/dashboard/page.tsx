import Template from "@/components/layout/template";
import { HeroBanner } from "@/components/section/HeroBanner";
export default function DashboardPage() {
  return (
    <Template>
      <div className="custom-container flex justify-center items-center px-6 md:px-28 bg-white">
        <HeroBanner />
      </div>
    </Template>
  );
}
