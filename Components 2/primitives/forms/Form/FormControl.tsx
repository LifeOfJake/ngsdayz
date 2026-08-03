"use client";

import * as React from "react";

import { FormContext } from "./FormContext";

export interface FormControlProps {
  children: React.ReactNode;

  required?: boolean;
  disabled?: boolean;
  error?: boolean;
}

export function FormControl({
  children,
  required = false,
  disabled = false,
  error = false,
}: FormControlProps) {
  const inputId = React.useId();
  const descriptionId = React.useId();
  const errorId = React.useId();

  const [descriptionCount, setDescriptionCount] =
    React.useState(0);

  const [errorCount, setErrorCount] =
    React.useState(0);

  const registerDescription = React.useCallback(() => {
    setDescriptionCount((count) => count + 1);

    return () =>
      setDescriptionCount((count) =>
        Math.max(0, count - 1)
      );
  }, []);

  const registerError = React.useCallback(() => {
    setErrorCount((count) => count + 1);

    return () =>
      setErrorCount((count) =>
        Math.max(0, count - 1)
      );
  }, []);

  const value = React.useMemo(
    () => ({
      inputId,
      descriptionId,
      errorId,

      required,
      disabled,
      hasError: error,

      hasDescription: descriptionCount > 0,
      hasErrorMessage: errorCount > 0,

      registerDescription,
      registerError,
    }),
    [
      inputId,
      descriptionId,
      errorId,
      required,
      disabled,
      error,
      descriptionCount,
      errorCount,
      registerDescription,
      registerError,
    ]
  );

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
}