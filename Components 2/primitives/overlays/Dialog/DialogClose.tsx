"use client";

import * as React from "react";

import Button from "@/Components 2/primitives/forms/Button";

import { useDialog } from "./DialogContext";

export interface DialogCloseProps {
  children?: React.ReactNode;
}

export function DialogClose({
  children = "Close",
}: DialogCloseProps) {
  const { onClose } = useDialog();

  return (
    <Button onClick={onClose}>
      {children}
    </Button>
  );
}