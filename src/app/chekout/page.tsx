import Template from "@/components/layout/template";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Image3 from "@/assets/images/image3.svg";

import { Checkbox } from "@/components/ui/checkbox";

export default function Chart() {
  return (
    <Template>
      <div className="custom-container justify-center items-center md:px-28 bg-white pb-6 px-6 pt-3 md:px-28">
        <h1 className="text-2xl font-bold mt-4">Checkout</h1>
        <div className="custom-container grid grid-cols-12 gap-6 mt-4">
          {/* Right Column */}
          <div className="col-span-12 border-b border-gray-300 pb-4 md:col-span-9 xl:col-span-9 mb-3">
            <div className="mb-4">
              <h2 className="text-lg font-bold">User Information</h2>
              <div className="custom-container flex justify-between gap-2 px-4">
                <p className="text-gray-600">Name</p>
                <span className="font-bold">santani</span>
              </div>
              <div className="custom-container flex justify-between gap-2 px-4">
                <p className="text-gray-600">Email</p>
                <span className="font-bold">santani@example.com</span>
              </div>
              <div className="custom-container flex justify-between gap-2 px-4">
                <p className="text-gray-600">Address</p>
                <span className="font-bold">123 Main St, Cityville</span>
              </div>
            </div>
            <div className="custom-container flex gap-4 items-center p-4 border-b shadow-sm">
              <div className="custom-container">
                <Image src={Image3} alt="Product Image" />
              </div>
              <div className="custom-container flex flex-col gap-2">
                <h2 className="text-lg font-bold">The Psychology of Money</h2>
                <p className="text-gray-600">Morgan Housel</p>
                <p className="text-gray-600 font-bold">$19.99</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 xl:col-span-3">
            <div className="custom-container p-4 border rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total</span>
                <span className="font-bold">$0.00</span>
              </div>
              <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors duration-300">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
}
