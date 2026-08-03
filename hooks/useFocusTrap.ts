"use client";

import * as React from "react";

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export function useFocusTrap<T extends HTMLElement>(enabled: boolean) {
  const containerRef = React.useRef<T>(null);
  const previousFocusRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!enabled) {
      return;
    }

    const container = containerRef.current;

    if (!container) {
      return;
    }

    previousFocusRef.current = document.activeElement as HTMLElement | null;

    function getFocusableElements() {
      const current = containerRef.current;

      if (!current) {
        return [];
      }

      return Array.from(
        current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      );
    }

    const initialElements = getFocusableElements();

    if (initialElements.length > 0) {
      initialElements[0].focus();
    } else {
      container.focus();
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Tab") {
        return;
      }

      const elements = getFocusableElements();

      if (elements.length === 0) {
        event.preventDefault();
        return;
      }

      const first = elements[0];
      const last = elements[elements.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }

        return;
      }

      if (document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    container.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("keydown", handleKeyDown);

      previousFocusRef.current?.focus();
    };
  }, [enabled]);

  return containerRef;
}