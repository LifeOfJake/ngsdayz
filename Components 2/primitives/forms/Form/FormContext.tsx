"use client";

import * as React from "react";

export interface FormContextValue {
  inputId: string;
  descriptionId: string;
  errorId: string;

  required: boolean;
  disabled: boolean;
  hasError: boolean;

  hasDescription: boolean;
  hasErrorMessage: boolean;

  registerDescription: () => () => void;
  registerError: () => () => void;
}

export const FormContext =
  React.createContext<FormContextValue | null>(null);

export function useFormControl() {
  const context = React.useContext(FormContext);

  if (!context) {
    throw new Error(
      "useFormControl must be used within a FormControl."
    );
  }

  return context;
}