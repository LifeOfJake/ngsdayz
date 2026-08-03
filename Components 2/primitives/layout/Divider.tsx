import { HTMLAttributes } from "react";

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  spacing?: "sm" | "md" | "lg";
  variant?: "solid" | "gradient";
}

export default function Divider({
  spacing = "md",
  variant = "solid",
  className = "",
  ...props
}: DividerProps) {
  const spaces = {
    sm: "my-4",
    md: "my-8",
    lg: "my-12",
  };

  const variants = {
    solid: "bg-white/10",

    gradient:
      "bg-gradient-to-r from-transparent via-lime-400/70 to-transparent",
  };

  return (
    <hr
      className={`
        border-0
        h-px
        ${variants[variant]}
        ${spaces[spacing]}
        ${className}
      `}
      {...props}
    />
  );
}