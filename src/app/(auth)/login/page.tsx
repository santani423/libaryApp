"use client";

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
import { loginUser } from "@/lib/api/auth";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      router.push("/dashboard");
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    loginMutation.mutate({
      email: values.email,
      password: values.password,
    });
  };

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
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email", {
                  required: "Email wajib diisi",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Format email tidak valid",
                  },
                })}
                className="rounded-md"
              />
              {errors.email ? (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              ) : null}
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
                {...register("password", {
                  required: "Password wajib diisi",
                  minLength: {
                    value: 6,
                    message: "Password minimal 6 karakter",
                  },
                })}
                className="rounded-md"
              />
              {errors.password ? (
                <p className="text-sm text-red-500">{errors.password.message}</p>
              ) : null}
            </div>

            {loginMutation.isError ? (
              <p className="text-sm text-red-500">{loginMutation.error?.message}</p>
            ) : null}

            <Button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
            >
              {loginMutation.isPending ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">

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
