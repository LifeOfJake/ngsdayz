import { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: "md" | "lg" | "xl";
}

export default function Container({
  children,
  size = "lg",
  className = "",
  ...props
}: ContainerProps) {
  const sizes = {
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-[90rem]",
  };

  return (
    <div
      className={`
        mx-auto
        w-full
        px-6
        lg:px-8
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}