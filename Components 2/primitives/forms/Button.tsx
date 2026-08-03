import * as React from "react";

import { cn } from "@/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;

  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger";

  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "inline";

  /**
   * Brand = Marketing site (NGS)
   * Default = Sentinel / Atlas / Application UI
   */
  typography?: "brand" | "default";

  fullWidth?: boolean;

  loading?: boolean;

  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;
}

const variants = {
  primary:
    "bg-lime-400 text-black hover:bg-lime-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(163,255,0,.35)]",

  secondary:
    "border border-white/10 bg-white/5 text-white backdrop-blur-xl hover:border-lime-400 hover:bg-lime-400 hover:text-black hover:shadow-[0_0_30px_rgba(163,255,0,.20)]",

  outline:
    "border border-white/15 bg-transparent text-white hover:border-lime-400 hover:bg-white/5",

  ghost:
    "bg-transparent text-white hover:text-lime-400",

  danger:
    "bg-red-600 text-white hover:bg-red-500",
} as const;

const sizes = {
  xs: "h-8 px-3 text-xs",

  sm: "px-5 py-2 text-sm",

  md: "px-8 py-4",

  lg: "px-10 py-5 text-lg",

  inline: "rounded-none p-0",
} as const;

const typography = {
  brand: "font-black uppercase tracking-[0.15em]",

  default: "font-medium tracking-normal normal-case",
} as const;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      typography: textStyle = "brand",
      fullWidth = false,
      loading = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-black",
          "disabled:pointer-events-none disabled:opacity-50",

          variants[variant],
          sizes[size],
          typography[textStyle],

          fullWidth && "w-full",

          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                opacity=".3"
              />

              <path
                d="M22 12a10 10 0 0 0-10-10"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>

            {children}
          </>
        ) : (
          <>
            {leftIcon}

            {children}

            {rightIcon}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;