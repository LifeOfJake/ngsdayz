"use client";

interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
}

export default function Switch({
  checked,
  onCheckedChange,
  disabled = false,
}: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={() => {
        if (!disabled) {
          onCheckedChange(!checked);
        }
      }}
      className={[
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200",
        "focus:outline-none focus:ring-2 focus:ring-emerald-500/50",
        disabled
          ? "cursor-not-allowed opacity-50"
          : "cursor-pointer",
        checked
          ? "bg-emerald-500"
          : "bg-zinc-700",
      ].join(" ")}
    >
      <span
        className={[
          "inline-block h-5 w-5 rounded-full bg-white shadow transition-transform duration-200",
          checked
            ? "translate-x-5"
            : "translate-x-0.5",
        ].join(" ")}
      />
    </button>
  );
}