"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { SignInInputs } from "../types";
import classes from "../style.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function UserSignupPage({
  className,
  ...props
}: UserAuthFormProps) {
  const router = useRouter();
  const signupForm = useForm<SignInInputs>();

  const signupHandler = async (values: SignInInputs) => {
    const resp = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (resp?.ok) return router.replace("/");

    signupForm.setError("email", {
      message: "Email / Password does not match",
    });
    signupForm.setError("password", {
      message: "Email / Password does not match",
    });
  };

  const isLoading = signupForm.formState.isSubmitting;

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={signupForm.handleSubmit(signupHandler)}>
        <div className="grid gap-4">
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            label="Email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={isLoading}
            {...signupForm.register("email")}
            error={signupForm.formState.errors.email?.message}
          />

          <Input
            id="password"
            type="password"
            label="Password"
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect="off"
            disabled={isLoading}
            {...signupForm.register("password")}
            error={signupForm.formState.errors.password?.message}
          />

          <Button type="submit" className="mt-2" loading={isLoading}>
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
