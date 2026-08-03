"use client";

import * as React from "react";

export interface DialogContextValue {
  onClose: () => void;

  titleId: string;
  descriptionId: string;

  registerTitle: () => () => void;
  registerDescription: () => () => void;
}

export const DialogContext =
  React.createContext<DialogContextValue | null>(null);

export function useDialog() {
  const context = React.useContext(DialogContext);

  if (!context) {
    throw new Error(
      "useDialog must be used within a Dialog."
    );
  }

  return context;
}