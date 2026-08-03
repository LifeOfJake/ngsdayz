"use client";

import { Search } from "lucide-react";

interface RuleSearchButtonProps {
  onClick: () => void;
}

export default function RuleSearchButton({
  onClick,
}: RuleSearchButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group
        flex
        w-full
        items-center
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        px-5
        py-4
        text-left
        transition-all
        duration-200
        hover:border-lime-400/30
        hover:bg-white/[0.05]
      "
    >
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-lime-400/10 p-2 text-lime-400 transition group-hover:bg-lime-400/20">
          <Search size={20} />
        </div>

        <div>
          <p className="font-semibold text-white">
            Search the Rulebook
          </p>

          <p className="text-sm text-gray-400">
            Rules, IDs, categories and keywords
          </p>
        </div>
      </div>

      <kbd className="rounded-lg border border-white/10 bg-black/40 px-3 py-1 text-xs font-mono text-gray-400">
        /
      </kbd>
    </button>
  );
}