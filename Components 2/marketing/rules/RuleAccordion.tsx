"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export type RuleAccordionColour =
  | "green"
  | "red"
  | "blue"
  | "amber"
  | "purple"
  | "cyan"
  | "orange"
  | "slate";

interface RuleAccordionProps {
  title: string;
  icon: React.ReactNode;
  colour: RuleAccordionColour;
  children: React.ReactNode;

  count?: number;

  defaultOpen?: boolean;

  actions?: React.ReactNode;

  className?: string;
}

const COLOURS = {
  green: {
    border: "border-green-500/20",
    background: "bg-green-500/5",
    hover: "hover:bg-green-500/10",
    text: "text-green-400",
    badge:
      "border-green-500/20 bg-green-500/10 text-green-300",
  },

  red: {
    border: "border-red-500/20",
    background: "bg-red-500/5",
    hover: "hover:bg-red-500/10",
    text: "text-red-400",
    badge:
      "border-red-500/20 bg-red-500/10 text-red-300",
  },

  blue: {
    border: "border-sky-500/20",
    background: "bg-sky-500/5",
    hover: "hover:bg-sky-500/10",
    text: "text-sky-400",
    badge:
      "border-sky-500/20 bg-sky-500/10 text-sky-300",
  },

  amber: {
    border: "border-amber-500/20",
    background: "bg-amber-500/5",
    hover: "hover:bg-amber-500/10",
    text: "text-amber-400",
    badge:
      "border-amber-500/20 bg-amber-500/10 text-amber-300",
  },

  purple: {
    border: "border-violet-500/20",
    background: "bg-violet-500/5",
    hover: "hover:bg-violet-500/10",
    text: "text-violet-400",
    badge:
      "border-violet-500/20 bg-violet-500/10 text-violet-300",
  },

  cyan: {
    border: "border-cyan-500/20",
    background: "bg-cyan-500/5",
    hover: "hover:bg-cyan-500/10",
    text: "text-cyan-400",
    badge:
      "border-cyan-500/20 bg-cyan-500/10 text-cyan-300",
  },

  orange: {
    border: "border-orange-500/20",
    background: "bg-orange-500/5",
    hover: "hover:bg-orange-500/10",
    text: "text-orange-400",
    badge:
      "border-orange-500/20 bg-orange-500/10 text-orange-300",
  },

  slate: {
    border: "border-slate-500/20",
    background: "bg-slate-500/5",
    hover: "hover:bg-slate-500/10",
    text: "text-slate-300",
    badge:
      "border-slate-500/20 bg-slate-500/10 text-slate-300",
  },
} satisfies Record<
  RuleAccordionColour,
  {
    border: string;
    background: string;
    hover: string;
    text: string;
    badge: string;
  }
>;

export default function RuleAccordion({
  title,
  icon,
  colour,
  children,
  count,
  defaultOpen = false,
  actions,
  className = "",
}: RuleAccordionProps) {
  const [open, setOpen] =
    useState(defaultOpen);

  useEffect(() => {
    const expand = () => setOpen(true);

    const collapse = () => setOpen(false);

    window.addEventListener(
      "rulebook:expand-all",
      expand,
    );

    window.addEventListener(
      "rulebook:collapse-all",
      collapse,
    );

    return () => {
      window.removeEventListener(
        "rulebook:expand-all",
        expand,
      );

      window.removeEventListener(
        "rulebook:collapse-all",
        collapse,
      );
    };
  }, []);

  const styles = COLOURS[colour];

  return (
    <section
      className={`overflow-hidden rounded-2xl border ${styles.border} ${styles.background} ${className}`}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() =>
          setOpen((previous) => !previous)
        }
        className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors ${styles.hover}`}
      >
        <div className="flex min-w-0 items-center gap-3">
          <span className={styles.text}>
            {icon}
          </span>

          <h4
            className={`text-sm font-black uppercase tracking-[2px] ${styles.text}`}
          >
            {title}
          </h4>

          {typeof count === "number" && (
            <span
              className={`rounded-full border px-2.5 py-1 text-xs font-bold ${styles.badge}`}
            >
              {count}
            </span>
          )}
                  </div>

        <div className="flex items-center gap-3">
          {actions}

          <ChevronDown
            size={18}
            className={`flex-shrink-0 text-gray-500 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open
            ? "grid-rows-[1fr]"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/5 p-5">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}