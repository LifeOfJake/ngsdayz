import { ReactNode } from "react";

interface HeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  size?: "md" | "lg" | "xl";
  className?: string;
}

export default function Heading({
  eyebrow,
  title,
  description,
  align = "center",
  size = "lg",
  className = "",
}: HeadingProps) {
  const alignment = {
    left: "text-left",
    center: "text-center",
  };

  const titleSizes = {
    md: "text-4xl md:text-5xl",
    lg: "text-5xl md:text-6xl",
    xl: "text-6xl md:text-8xl",
  };

  return (
    <div
      className={`
        mx-auto
        max-w-4xl
        ${alignment[align]}
        ${className}
      `}
    >
      {eyebrow && (
        <p className="text-sm font-black uppercase tracking-[8px] text-lime-400">
          {eyebrow}
        </p>
      )}

      <h2
        className={`
          mt-6
          font-black
          uppercase
          leading-tight
          text-white
          ${titleSizes[size]}
        `}
      >
        {title}
      </h2>

      {description && (
        <p className="mt-8 text-lg leading-9 text-gray-300">
          {description}
        </p>
      )}
    </div>
  );
}