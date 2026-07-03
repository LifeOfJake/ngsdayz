import { HTMLAttributes, ReactNode } from "react";

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  columns?: 2 | 3 | 4;
}

export default function Grid({
  children,
  columns = 3,
  className = "",
  ...props
}: GridProps) {
  const cols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 xl:grid-cols-3",
    4: "md:grid-cols-2 xl:grid-cols-4",
  };

  return (
    <div
      className={`grid gap-8 ${cols[columns]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}