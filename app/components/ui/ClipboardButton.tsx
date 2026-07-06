"use client";

import { useState } from "react";

interface ClipboardButtonProps {
  text: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
}

export default function ClipboardButton({
  text,
  label = "Copy Address",
  copiedLabel = "✓ Copied",
  className = "",
}: ClipboardButtonProps) {
  const [copied, setCopied] = useState(false);

  const unavailable =
    !text ||
    text === ":" ||
    text.startsWith("TBA");

  const handleCopy = async () => {
    if (unavailable) return;

    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      type="button"
      disabled={unavailable}
      onClick={handleCopy}
      className={`
        inline-flex
        w-full
        items-center
        justify-center
        rounded-xl
        border
        px-5
        py-3
        text-sm
        font-black
        uppercase
        tracking-[3px]
        transition-all
        duration-300

        ${
          unavailable
            ? `
              cursor-not-allowed
              border-white/10
              bg-white/5
              text-gray-500
            `
            : `
              border-white/10
              bg-white/5
              text-white
              hover:border-lime-400/40
              hover:bg-lime-400/10
              hover:text-lime-400
              hover:shadow-[0_0_25px_rgba(163,230,53,0.15)]
              active:scale-[0.98]
            `
        }

        ${className}
      `}
    >
      {unavailable
        ? "Unavailable"
        : copied
        ? copiedLabel
        : label}
    </button>
  );
}