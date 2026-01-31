import * as React from "react";

import { cn } from "@/lib/utils";

// Since I didn't install cva or radix-slot, I'll simplify the button for now to avoid extra installs or install them.
// "Modern" implies good components. I'll stick to simple tailwind for now to be fast, or make a very nice one.
// Actually, I'll just make a standard component without cva/radix to save time unless requested.

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

    const variants = {
      primary:
        "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg",
      secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
      outline:
        "border border-slate-200 hover:bg-slate-100 dark:border-slate-800",
      ghost: "hover:bg-slate-100 text-slate-700",
    };

    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
