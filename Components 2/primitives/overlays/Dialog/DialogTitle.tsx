import * as React from "react";

import { cn } from "@/lib/utils";
import { useDialog } from "./DialogContext";

export const DialogTitle =
  React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
  >(function DialogTitle(
    { className, id, ...props },
    ref
  ) {
    const {
      titleId,
      registerTitle,
    } = useDialog();

    React.useEffect(
      () => registerTitle(),
      [registerTitle]
    );

    return (
      <h2
        ref={ref}
        id={id ?? titleId}
        className={cn(
          "text-2xl font-bold tracking-tight",
          className
        )}
        {...props}
      />
    );
  });

DialogTitle.displayName = "DialogTitle";