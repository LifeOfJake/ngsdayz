import { cn } from "@/lib/utils";

export type Status =
  | "Online"
  | "Restarting"
  | "Offline"
  | "Coming Soon";

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const statusStyles: Record<
  Status,
  {
    dot: string;
    badge: string;
  }
> = {
  Online: {
    dot: "bg-emerald-500",
    badge:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  },

  Restarting: {
    dot: "bg-amber-500",
    badge:
      "border-amber-500/20 bg-amber-500/10 text-amber-400",
  },

  Offline: {
    dot: "bg-red-500",
    badge:
      "border-red-500/20 bg-red-500/10 text-red-400",
  },

  "Coming Soon": {
    dot: "bg-slate-400",
    badge:
      "border-slate-500/20 bg-slate-500/10 text-slate-300",
  },
};

export default function StatusBadge({
  status,
  className,
}: StatusBadgeProps) {
  const styles = statusStyles[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium",
        styles.badge,
        className
      )}
    >
      <span
        className={cn(
          "h-2 w-2 rounded-full",
          styles.dot
        )}
      />

      {status}
    </span>
  );
}