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
import { registerUser } from "@/lib/api/auth";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import { useForm } from "react-hook-form";

type RegisterFormValues = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      reset();
    },
  });

  const onSubmit = (values: RegisterFormValues) => {
    registerMutation.mutate({
      name: values.name,
      email: values.email,
      phone: values.phone,
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
              Register
            </h2>
            <p className="text-black">
              Create your account to start borrowing books.
            </p>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            className="space-y-5"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                {...register("name", { required: "Nama wajib diisi" })}
                className="rounded-md"
              />
              {errors.name ? (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              ) : null}
            </div>

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
              <Label htmlFor="phone">Nomor Handphone</Label>
              <Input
                id="phone"
                type="text"
                placeholder="08123456789"
                {...register("phone", {
                  required: "Nomor handphone wajib diisi",
                })}
                className="rounded-md"
              />
              {errors.phone ? (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>

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
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>

              <Input
                id="confirm-password"
                type="password"
                {...register("confirmPassword", {
                  required: "Konfirmasi password wajib diisi",
                  validate: (value, formValues) =>
                    value === formValues.password ||
                    "Konfirmasi password tidak sama",
                })}
                className="rounded-md"
              />
              {errors.confirmPassword ? (
                <p className="text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              ) : null}
            </div>

            {registerMutation.isError ? (
              <p className="text-sm text-red-500">
                {(registerMutation.error as Error).message}
              </p>
            ) : null}

            {registerMutation.isSuccess ? (
              <p className="text-sm text-green-600">Registrasi berhasil.</p>
            ) : null}

            <Button
              type="submit"
              disabled={registerMutation.isPending}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
            >
              {registerMutation.isPending ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
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
