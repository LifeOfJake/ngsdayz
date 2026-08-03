"use client";

import * as React from "react";

type PossibleRef<T> =
  | React.MutableRefObject<T | null>
  | React.RefCallback<T>
  | null
  | undefined;

export function useMergedRefs<T>(
  ...refs: PossibleRef<T>[]
): React.RefCallback<T> {
  return React.useCallback(
    (node: T | null) => {
      for (const ref of refs) {
        if (!ref) {
          continue;
        }

        if (typeof ref === "function") {
          ref(node);
          continue;
        }

        ref.current = node;
      }
    },
    [refs],
  );
}