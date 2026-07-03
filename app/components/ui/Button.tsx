import {
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  variant?: "primary" | "secondary" | "ghost";

  size?: "sm" | "md" | "lg" | "inline";

  fullWidth?: boolean;

  loading?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      leftIcon,
      rightIcon,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-xl font-black uppercase tracking-[0.15em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-black disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-lime-400 text-black hover:bg-lime-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(163,255,0,.35)]",

      secondary:
        "border border-white/10 bg-white/5 text-white backdrop-blur-xl hover:border-lime-400 hover:bg-lime-400 hover:text-black hover:shadow-[0_0_30px_rgba(163,255,0,.20)]",

      ghost:
        "text-white hover:text-lime-400",
    };

    const sizes = {
      sm: "px-5 py-2 text-sm",

      md: "px-8 py-4",

      lg: "px-10 py-5 text-lg",

      inline: "rounded-none p-0",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`
          ${base}
          ${variants[variant]}
          ${sizes[size]}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
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