export default function SearchFooter() {
  return (
    <div className="flex items-center justify-between border-t border-white/10 px-6 py-4 text-xs text-gray-500">
      <div className="flex items-center gap-5">
        <span>
          <kbd className="rounded border border-white/10 bg-white/5 px-2 py-1 font-mono">
            ↑↓
          </kbd>{" "}
          Navigate
        </span>

        <span>
          <kbd className="rounded border border-white/10 bg-white/5 px-2 py-1 font-mono">
            Enter
          </kbd>{" "}
          Select
        </span>
      </div>

      <span>
        <kbd className="rounded border border-white/10 bg-white/5 px-2 py-1 font-mono">
          Esc
        </kbd>{" "}
        Close
      </span>
    </div>
  );
}