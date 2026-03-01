import Image from "next/image";
import { ReactNode } from "react";
import Navbar from "@/components/layout/navbar";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="custom-container pt-16 ">{children}</div>
    </div>
  );
}
