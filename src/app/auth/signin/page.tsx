"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { SignInInputs } from "../types";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function UserSignupPage({
  className,
  ...props
}: UserAuthFormProps) {
  const router = useRouter();
  const signupForm = useForm<SignInInputs>();

  const signupHandler = async (values: SignInInputs) => {
    const searchParams = new URLSearchParams(window.location.search);
    const callbackUrl = searchParams.get("callbackUrl") ?? "/";

    const resp = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl,
    });

    if (resp?.ok) return router.replace(resp.url || "/");

    signupForm.setError("email", { message: "credentials do not match" });
    signupForm.setError("password", { message: "credentials do not match" });
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
