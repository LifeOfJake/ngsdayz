import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  variant?: "default" | "flat" | "static" | "glass";

  padding?: "none" | "sm" | "md" | "lg";
}

export default function Card({
  children,
  variant = "default",
  padding = "md",
  className = "",
  ...props
}: CardProps) {
  const variants = {
    default:
      "border border-white/10 bg-[#111111] hover:-translate-y-2 hover:border-lime-400/30 hover:shadow-[0_30px_80px_rgba(163,255,0,.08)]",

    flat:
      "border border-white/10 bg-[#111111]",

    static:
      "border border-white/10 bg-[#111111] shadow-none",

    glass:
      "border border-white/10 bg-black/45 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,.45)]",
  };

  const paddings = {
    none: "",

    sm: "p-6",

    md: "p-8",

    lg: "p-12",
  };

  return (
    <div
      className={`
        overflow-hidden
        rounded-3xl
        transition-all
        duration-500
        ${variants[variant]}
        ${paddings[padding]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}