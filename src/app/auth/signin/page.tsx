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

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function UserSignupPage({
  className,
  ...props
}: UserAuthFormProps) {
  const signupForm = useForm<SignInInputs>();

  const signupHandler = async (values: SignInInputs) => {
    return signIn("credentials", {
      email: values.email,
      password: values.password,
    });
  };

  const isLoading = signupForm.formState.isSubmitting;

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={signupForm.handleSubmit(signupHandler)}>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <Label className={classes.label} htmlFor="email">
              Email
            </Label>

            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...signupForm.register("email")}
            />
          </div>

          <div className="grid gap-1">
            <Label className={classes.label} htmlFor="password">
              Password
            </Label>

            <Input
              id="password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              {...signupForm.register("password")}
            />
          </div>

          <Button type="submit" className="mt-2" disabled={isLoading}>
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
