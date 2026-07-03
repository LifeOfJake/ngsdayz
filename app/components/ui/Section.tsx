import { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  background?: "primary" | "secondary" | "transparent";
  spacing?: "sm" | "md" | "lg";
  container?: boolean;
}

export default function Section({
  children,
  background = "primary",
  spacing = "lg",
  container = true,
  className = "",
  ...props
}: SectionProps) {
  const backgrounds = {
    primary: "bg-[#070707]",
    secondary: "bg-[#090909]",
    transparent: "bg-transparent",
  };

  const spacings = {
    sm: "py-20",
    md: "py-28",
    lg: "py-36",
  };

  const content = container ? (
    <div className="mx-auto max-w-7xl px-8">
      {children}
    </div>
  ) : (
    children
  );

  return (
    <section
      className={`
        ${backgrounds[background]}
        ${spacings[spacing]}
        ${className}
      `}
      {...props}
    >
      {content}
    </section>
  );
}