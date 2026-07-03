import { HTMLAttributes, ReactNode } from "react";

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  tint?: "dark" | "lime" | "clear";

  padding?: "sm" | "md" | "lg";
}

export default function GlassPanel({
  children,
  tint = "dark",
  padding = "md",
  className = "",
  ...props
}: GlassPanelProps) {
  const tints = {
    dark:
      "bg-black/45",

    lime:
      "bg-gradient-to-br from-lime-400/10 via-[#111111] to-[#090909]",

    clear:
      "bg-white/5",
  };

  const paddings = {
    sm: "p-6",

    md: "p-8",

    lg: "p-16",
  };

  return (
    <div
      className={`
        rounded-[2rem]
        border
        border-white/10
        backdrop-blur-xl
        shadow-2xl
        transition-all
        duration-500
        ${tints[tint]}
        ${paddings[padding]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}