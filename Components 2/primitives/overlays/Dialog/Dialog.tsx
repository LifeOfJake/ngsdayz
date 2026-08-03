"use client";

import * as React from "react";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";
import {
  useClickOutside,
  useEscapeKey,
  useFocusTrap,
  useLockBodyScroll,
  useMergedRefs,
} from "@/hooks";

import { DialogContext } from "./DialogContext";
import { DialogOverlay } from "./DialogOverlay";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;

  size?: "sm" | "md" | "lg" | "xl" | "fullscreen";

  closeOnEscape?: boolean;
  closeOnOverlayClick?: boolean;
}

const sizeClasses = {
  sm: "max-w-md",
  md: "max-w-2xl",
  lg: "max-w-4xl",
  xl: "max-w-6xl",
  fullscreen: "h-full w-full max-w-none p-0",
} as const;

export function Dialog({
  open,
  onClose,
  children,
  size = "lg",
  closeOnEscape = true,
  closeOnOverlayClick = true,
}: DialogProps) {
  const [mounted, setMounted] = React.useState(false);

  const titleId = React.useId();
  const descriptionId = React.useId();

  const [titleCount, setTitleCount] =
    React.useState(0);

  const [descriptionCount, setDescriptionCount] =
    React.useState(0);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const registerTitle =
    React.useCallback(() => {
      setTitleCount(c => c + 1);

      return () =>
        setTitleCount(c =>
          Math.max(0, c - 1)
        );
    }, []);

  const registerDescription =
    React.useCallback(() => {
      setDescriptionCount(c => c + 1);

      return () =>
        setDescriptionCount(c =>
          Math.max(0, c - 1)
        );
    }, []);

  React.useEffect(() => {
    if (
      process.env.NODE_ENV ===
      "production"
    ) {
      return;
    }

    if (!open) {
      return;
    }

    if (titleCount === 0) {
      console.warn(
        "[Dialog] Missing <DialogTitle>. Accessible dialogs should always have a title."
      );
    }

    if (descriptionCount === 0) {
      console.warn(
        "[Dialog] Consider adding a <DialogDescription> to provide additional context."
      );
    }
  }, [
    open,
    titleCount,
    descriptionCount,
  ]);

  useEscapeKey(
    open && closeOnEscape,
    onClose,
  );

  useLockBodyScroll(open);

  const outsideClickRef =
    useClickOutside<HTMLDivElement>(
      open && closeOnOverlayClick,
      onClose
    );

  const focusTrapRef =
    useFocusTrap<HTMLDivElement>(
      open
    );

  const dialogRef = useMergedRefs(
    outsideClickRef,
    focusTrapRef
  );

  if (!mounted || !open) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <DialogOverlay />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
        className={cn(
          "relative z-10 w-full",
          sizeClasses[size],
          "motion-safe:animate-in",
          "motion-safe:zoom-in-95",
          "motion-safe:fade-in",
          "motion-safe:duration-200",
        )}
      >
        <DialogContext.Provider
          value={{
            onClose,

            titleId,
            descriptionId,

            registerTitle,
            registerDescription,
          }}
        >
          {children}
        </DialogContext.Provider>
      </div>
    </div>,
    document.body
  );
}