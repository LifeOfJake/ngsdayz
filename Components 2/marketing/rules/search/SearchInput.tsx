"use client";

import { forwardRef } from "react";
import { Search, X } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ value, onChange }, ref) => {
    return (
      <div className="relative">
        <Search
          size={20}
          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          ref={ref}
          autoComplete="off"
          spellCheck={false}
          value={value}
          placeholder="Search rules, IDs or keywords..."
          onChange={(e) => onChange(e.target.value)}
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/5
            py-4
            pl-14
            pr-14
            text-white
            outline-none
            transition-all
            duration-200
            placeholder:text-gray-500
            focus:border-lime-400/40
            focus:bg-white/10
            focus:ring-4
            focus:ring-lime-400/10
          "
        />

        {value.length > 0 && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              rounded-lg
              p-2
              text-gray-400
              transition
              hover:bg-white/10
              hover:text-white
            "
          >
            <X size={18} />
          </button>
        )}
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";

export default SearchInput;