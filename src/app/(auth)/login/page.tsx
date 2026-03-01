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

export default function Login() {
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
              Login
            </h2>
            <p className="text-black">
              Sign in to manage your library account.
            </p>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-5">
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
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>

                <a
                  href="#"
                  className="ml-auto text-sm text-primary hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <Input
                id="password"
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
            Login
          </Button>

          <p>
            Don't have an account?
            <a
              href="/register"
              className="ml-auto text-sm text-primary hover:underline"
            >
              Register
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
