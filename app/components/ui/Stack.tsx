import { HTMLAttributes, ReactNode } from "react";

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  gap?: "sm" | "md" | "lg";
}

export default function Stack({
  children,
  gap = "md",
  className = "",
  ...props
}: StackProps) {
  const gaps = {
    sm: "gap-4",
    md: "gap-8",
    lg: "gap-12",
  };

  return (
    <div
      className={`flex flex-col ${gaps[gap]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}