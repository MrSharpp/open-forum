"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { SignInInputs } from "../types";
import classes from '../style.module.css'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const signupForm = useForm<SignInInputs>();

  const signupHandler = async (values: SignInInputs) => {
    return signIn("email", { email: values.email });
  };

  const isLoading = signupForm.formState.isSubmitting;

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={signupForm.handleSubmit(signupHandler)}>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <Label  className={classes.label}  htmlFor="email">
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
            <Label className={classes.label}  htmlFor="password">
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

          <div className="grid gap-1">
            <Label  className={classes.label} htmlFor="confirmPassword">
              Confirm Password
            </Label>

            <Input
              id="confirmPassword"
              type="confirmPassword"
              autoCapitalize="none"
              autoComplete="confirmPassword"
              autoCorrect="off"
              disabled={isLoading}
              {...signupForm.register("confirmPassword")}
            />
          </div>

          <Button type="submit" className="mt-2" disabled={isLoading}>
            {/* {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )} */}
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}
