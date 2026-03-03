import Template from "@/components/layout/template";

export default function Success() {
  return (
    <Template>
      <div className="w-full min-h-screen bg-white px-6 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mt-4">Success</h1>
        <p className="mt-2 text-gray-600">
          Your order has been placed successfully!
        </p>
      </div>
    </Template>
  );
}
