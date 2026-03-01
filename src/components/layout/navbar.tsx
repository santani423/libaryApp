import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import { Menu, Search, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const cartCount = 1; // nanti bisa dari state/cart API

  return (
    <div className="fixed top-0 z-50 w-full shadow-md">
      <div className="custom-container flex items-center justify-between p-6 h-14 md:px-28 bg-white">
        {/* Logo */}
        <Image src={Logo} alt="Logo" width={33} height={33} />

        {/* Icons */}
        <div className="flex items-center gap-5">
          <Search className="w-5 h-5 text-black" />

          {/* Cart with badge */}
          <div className="relative">
            <ShoppingBag className="w-6 h-6 text-black" />

            {cartCount > 0 && (
              <span
                className="absolute -top-2 -right-2 flex items-center justify-center
                               w-4 h-4 text-[10px] font-bold text-white
                               bg-red-500 rounded-full"
              >
                {cartCount}
              </span>
            )}
          </div>

          <Menu className="w-6 h-6 text-black" />
        </div>
      </div>
    </div>
  );
}
