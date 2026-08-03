import { useCallback, useEffect, useState } from "react";

interface Options<T> {
  items: T[];
  open: boolean;
  onSelect(item: T): void;
  onClose(): void;
}

export function useKeyboardNavigation<T>({
  items,
  open,
  onSelect,
  onClose,
}: Options<T>) {
  const [selectedIndex, setSelectedIndex] =
    useState(0);

  useEffect(() => {
    setSelectedIndex(0);
  }, [items]);

  const moveUp = useCallback(() => {
    if (items.length === 0) return;

    setSelectedIndex((current) =>
      current <= 0 ? items.length - 1 : current - 1,
    );
  }, [items.length]);

  const moveDown = useCallback(() => {
    if (items.length === 0) return;

    setSelectedIndex((current) =>
      current >= items.length - 1 ? 0 : current + 1,
    );
  }, [items.length]);

  const moveHome = useCallback(() => {
    if (items.length === 0) return;

    setSelectedIndex(0);
  }, [items.length]);

  const moveEnd = useCallback(() => {
    if (items.length === 0) return;

    setSelectedIndex(items.length - 1);
  }, [items.length]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      switch (event.key) {
        case "ArrowUp":
          event.preventDefault();
          moveUp();
          break;

        case "ArrowDown":
          event.preventDefault();
          moveDown();
          break;

        case "Home":
          event.preventDefault();
          moveHome();
          break;

        case "End":
          event.preventDefault();
          moveEnd();
          break;

        case "Enter":
          event.preventDefault();

          if (items[selectedIndex]) {
            onSelect(items[selectedIndex]);
          }

          break;

        case "Escape":
          event.preventDefault();
          onClose();
          break;
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
  }, [
    open,
    items,
    selectedIndex,
    moveUp,
    moveDown,
    moveHome,
    moveEnd,
    onClose,
    onSelect,
  ]);

  return {
    selectedIndex,
    setSelectedIndex,
    moveUp,
    moveDown,
    moveHome,
    moveEnd,
  };
}