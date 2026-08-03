"use client";

import * as React from "react";

export function useClickOutside<T extends HTMLElement>(
  enabled: boolean,
  onClickOutside: () => void,
) {
  const ref = React.useRef<T>(null);

  React.useEffect(() => {
    if (!enabled) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      const element = ref.current;

      if (!element) {
        return;
      }

      if (!element.contains(event.target as Node)) {
        onClickOutside();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [enabled, onClickOutside]);

  return ref;
}