"use client";

import * as React from "react";

import { FormContext } from "./FormContext";

export interface FormFieldProps {
  id?: string;
  required?: boolean;
  disabled?: boolean;
  "aria-describedby"?: string;
  "aria-invalid"?: React.AriaAttributes["aria-invalid"];
}

export interface FormFieldAttributes {
  id?: string;
  required?: boolean;
  disabled?: boolean;
  "aria-describedby"?: string;
  "aria-invalid"?: React.AriaAttributes["aria-invalid"];
}

export function useFormField({
  id,
  required,
  disabled,
  "aria-describedby": ariaDescribedBy,
  "aria-invalid": ariaInvalid,
}: FormFieldProps): FormFieldAttributes {
  const form = React.useContext(FormContext);

  const describedBy = React.useMemo(() => {
    if (!form) {
      return ariaDescribedBy;
    }

    const ids = [
      form.hasDescription && form.descriptionId,
      form.hasError && form.hasErrorMessage && form.errorId,
      ariaDescribedBy,
    ].filter(Boolean);

    return ids.length > 0
      ? ids.join(" ")
      : undefined;
  }, [form, ariaDescribedBy]);

  return React.useMemo(
    () => ({
      id: id ?? form?.inputId,
      required: required ?? form?.required,
      disabled: disabled ?? form?.disabled,
      "aria-invalid":
        ariaInvalid ?? (form?.hasError || undefined),
      "aria-describedby": describedBy,
    }),
    [
      id,
      required,
      disabled,
      ariaInvalid,
      describedBy,
      form,
    ]
  );
}