import * as React from "react";

import { cn } from "@/lib/utils";
import { useDialog } from "./DialogContext";

export function DialogDescription({
  className,
  id,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  const {
    descriptionId,
    registerDescription,
  } = useDialog();

    React.useEffect(
      () => registerDescription(),
      [registerDescription]
    );

  return (
    <p
      id={id ?? descriptionId}
      className={cn(
        "text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}