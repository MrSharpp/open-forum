import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "./label";
import { VariantProps, cva } from "class-variance-authority";

const inputVariants = cva(
  "flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      type: {
        default: "border-input focus-visible:ring-ring",
        error: "border-destructive focus-visible:ring-destructive",
      },
    },

    defaultVariants: {
      type: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    const id = React.useId();

    return (
      <div className="grid w-full items-center gap-1.5">
        {props.title && <Label htmlFor={props.id ?? id}>{props.title}</Label>}

        <input
          className={cn(
            inputVariants({ type: Boolean(error) ? "error" : "default" }),
            className
          )}
          id={props.id ?? id}
          type={type}
          ref={ref}
          {...props}
        />

        {error && (
          <p role="alert" className="text-destructive text-sm">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
