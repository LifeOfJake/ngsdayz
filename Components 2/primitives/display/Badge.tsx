import { HTMLAttributes, ReactNode } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;

  variant?:
    | "lime"
    | "white"
    | "danger"
    | "warning"
    | "info";
}

export default function Badge({
  children,
  variant = "lime",
  className = "",
  ...props
}: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.2em] transition-all duration-300";

  const variants = {
    lime:
      "border border-lime-400/30 bg-lime-400/10 text-lime-400",

    white:
      "border border-white/10 bg-white/5 text-gray-300",

    danger:
      "border border-red-500/30 bg-red-500/10 text-red-400",

    warning:
      "border border-amber-500/30 bg-amber-500/10 text-amber-400",

    info:
      "border border-sky-500/30 bg-sky-500/10 text-sky-400",
  };

  return (
    <span
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}