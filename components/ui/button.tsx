import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Button variants
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500",
  {
    variants: {
      variant: {
        default:
          "bg-green-700 text-white hover:bg-green-800 shadow-md hover:shadow-lg",
        gradient:
          "bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 text-white hover:from-green-700 hover:via-emerald-600 hover:to-lime-600 shadow-lg hover:shadow-xl",
        glass:
          "backdrop-blur-md bg-white/20 text-white border border-white/30 hover:bg-white/30 hover:text-green-50 transition-all shadow-md",
        outline:
          "border-2 border-green-700 text-green-700 hover:bg-green-100 hover:text-green-800",
        secondary:
          "bg-green-100 text-green-800 hover:bg-green-200 border border-green-200",
        ghost:
          "text-green-700 hover:bg-green-50 hover:text-green-800 transition-colors",
        link: "text-green-700 underline-offset-4 hover:underline font-medium",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
      },
      size: {
        default: "h-10 px-5 py-2.5 text-base",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-7 text-lg",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
      roundness: {
        normal: "rounded-xl",
        full: "rounded-full",
        soft: "rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      roundness: "normal",
    },
  }
);

function Button({
  className,
  variant,
  size,
  roundness,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, roundness, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
