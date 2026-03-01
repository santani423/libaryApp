import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-4">
      <Card className="w-full max-w-sm rounded-xl shadow-sm border border-gray-200">
        <CardHeader className="space-y-2">
          <CardTitle className="text-xl font-semibold custom-container flex items-center gap-2">
            <Image
              src={Logo}
              alt="Description of image"
              width={33}
              height={33}
            />
            <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Booky
            </h1>
          </CardTitle>

          <CardDescription>
            <h2 className="text-black scroll-m-20 text-2xl font-semibold tracking-tight">
              Register
            </h2>
            <p className="text-black">
              Create your account to start borrowing books.
            </p>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                className="rounded-md"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="rounded-md"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Nomor Handphone</Label>
              <Input
                id="phone"
                type="text"
                placeholder="08123456789"
                required
                className="rounded-md"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>

              <Input
                id="password"
                type="password"
                required
                className="rounded-md"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>

              <Input
                id="confirm-password"
                type="password"
                required
                className="rounded-md"
              />
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
          >
            Submit
          </Button>

          <p>
            Already have an account?
            <a
              href="/login"
              className="ml-auto text-sm text-primary hover:underline"
            >
              Login
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
