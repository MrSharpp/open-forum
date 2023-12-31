"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { SignInInputs } from "../types";
import classes from "../style.module.css";
import { createUser } from "./action";
import { useFormState, useFormStatus } from "react-dom";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function UserSignupPage({
  className,
  ...props
}: UserAuthFormProps) {
  const [state, formAction] = useFormState(createUser, null);
  const { pending } = useFormStatus();
  const signupForm = useForm<SignInInputs>();

  // TODO: Add Validations

  const signupHandler = async (values: SignInInputs) => {
    if (values.confirmPassword != values.password) {
      // TODO: Render the error in respective input
      return alert("password do not match");
    }

    formAction(values);
  };

  const isLoading = signupForm.formState.isSubmitting || pending;

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={signupForm.handleSubmit(signupHandler)}>
        <div className="grid gap-4">
          {/* // TODO: Add full name field */}

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
            {state?.errors?.email && <p>{state?.errors?.email}</p>}
          </div>

          <div className="grid gap-1">
            <Label className={classes.label} htmlFor="password">
              Password
            </Label>

            <Input
              id="password"
              type="password"
              disabled={isLoading}
              {...signupForm.register("password")}
            />
          </div>

          <div className="grid gap-1">
            <Label className={classes.label} htmlFor="confirmPassword">
              Confirm Password
            </Label>

            <Input
              id="confirmPassword"
              type="password"
              disabled={isLoading}
              {...signupForm.register("confirmPassword")}
            />
          </div>

          <Button type="submit" className="mt-2" disabled={isLoading}>
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}
