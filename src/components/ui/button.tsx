import { Slot } from "@radix-ui/react-slot";
import { IconBold, IconLoader } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

import classes from "./button.module.css";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },

      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, loading = false, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const ChildElement = React.useMemo(() => {
      const subChildren = !asChild
        ? props.children
        : (props.children as React.ReactHTMLElement<HTMLElement>).props
            .children;

      if (Array.isArray(props.children))
        throw "Only one child can be rendered as a child of Button";

      const element = (
        <div className="flex items-center justify-center gap-2 ">
          {loading && <IconLoader className="animate-spin" size={18} />}
          {subChildren}
        </div>
      );

      if (typeof props.children === "string") return element;

      if (size === "icon") {
        if (loading) return <IconLoader className="animate-spin" size={18} />;
        return props.children;
      }

      return React.cloneElement(
        props.children as React.ReactHTMLElement<HTMLElement>,
        {
          ...(props.children as React.ReactHTMLElement<HTMLElement>).props,
          disabled: loading ?? props.disabled,
          ...(props.onClick
            ? {
                onClick(e) {
                  if (props.disabled || loading) {
                    e.preventDefault();
                    e.stopPropagation();

                    return;
                  }

                  return props?.onClick?.(e as any);
                },
              }
            : {}),
        },
        [element]
      );
    }, [asChild, props, loading, size]);

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          classes.btn,
          loading || props.disabled ? "cursor-not-allowed opacity-75" : ""
        )}
        ref={ref}
        {...props}
      >
        {ChildElement}
      </Comp>
    );
  }
);
Button.displayName = "Button";

const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.AllHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div className={cn(className, classes.btnGroup)} {...props} ref={ref} />
  );
});

ButtonGroup.displayName = "ButtonGroup";

export { Button, ButtonGroup, buttonVariants };
