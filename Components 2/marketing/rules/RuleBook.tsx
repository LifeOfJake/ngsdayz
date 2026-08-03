"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Car,
  ChevronDown,
  ChevronUp,
  Hammer,
  LifeBuoy,
  ShieldAlert,
  Swords,
  Users,
} from "lucide-react";

import RuleCategory from "./RuleCategory";
import RuleSearch from "./search/RuleSearch";

import { RuleIcon, ruleCategories } from "../../../data/rules/rules";

import type { SearchResult } from "@/types/search";

const iconMap: Record<RuleIcon, React.ReactNode> = {
  swords: <Swords size={28} />,
  hammer: <Hammer size={28} />,
  car: <Car size={28} />,
  users: <Users size={28} />,
  "shield-alert": <ShieldAlert size={28} />,
  "life-buoy": <LifeBuoy size={28} />,
};

export default function RuleBook() {
  const [search, setSearch] = useState("");

  const [openCategories, setOpenCategories] = useState<Set<string>>(
    () => new Set(),
  );

  const totalRules = useMemo(
    () =>
      ruleCategories.reduce(
        (total, category) => total + category.rules.length,
        0,
      ),
    [],
  );

  const allCategoryIds = useMemo(
    () => ruleCategories.map((category) => category.id),
    [],
  );

  useEffect(() => {
    const navigateToRule = (ruleId: string) => {
      const hash = ruleId.toLowerCase();

      const category = ruleCategories.find((category) =>
        category.rules.some(
          (rule) => rule.id.toLowerCase() === hash,
        ),
      );

      if (!category) {
        return;
      }

      setOpenCategories((previous) => {
        const next = new Set(previous);
        next.add(category.id);
        return next;
      });

      requestAnimationFrame(() => {
        setTimeout(() => {
          const element = document.getElementById(hash);

          if (!element) {
            return;
          }

          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });

          setTimeout(() => {
            window.dispatchEvent(
              new CustomEvent("highlight-rule", {
                detail: hash,
              }),
            );
          }, 500);
        }, 300);
      });
    };

    const hash = window.location.hash.replace("#", "");

    if (hash) {
      navigateToRule(hash);
    }

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");

      if (hash) {
        navigateToRule(hash);
      }
    };

    window.addEventListener(
      "hashchange",
      handleHashChange,
    );

    return () =>
      window.removeEventListener(
        "hashchange",
        handleHashChange,
      );
  }, []);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;

      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable
      ) {
        return;
      }

      if (event.key === "/") {
        event.preventDefault();

        const input = document.getElementById(
          "rule-search",
        ) as HTMLInputElement | null;

        input?.focus();
      }

      if (event.key === "Escape") {
        setSearch("");
      }
    };

    window.addEventListener(
      "keydown",
      handleShortcut,
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleShortcut,
      );
  }, []);

  const handleToggle = (id: string) => {
    setOpenCategories((previous) => {
      const next = new Set(previous);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  const expandAll = () => {
    setOpenCategories(new Set(allCategoryIds));

    window.dispatchEvent(
      new Event("rulebook:expand-all"),
    );
  };

  const collapseAll = () => {
    setOpenCategories(new Set());

    window.dispatchEvent(
      new Event("rulebook:collapse-all"),
    );
  };

  const handleNavigate = (result: SearchResult) => {
    setSearch("");

    if (!result.document.categoryId) {
      return;
    }

    setOpenCategories((previous) => {
      const next = new Set(previous);
      next.add(result.document.categoryId!);
      return next;
    });

    requestAnimationFrame(() => {
      setTimeout(() => {
        const element = document.getElementById(
          result.document.anchorId.toLowerCase(),
        );

        if (!element) {
          return;
        }

        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        setTimeout(() => {
          window.dispatchEvent(
            new CustomEvent("highlight-rule", {
              detail: result.document.anchorId.toLowerCase(),
            }),
          );
        }, 500);
      }, 300);
    });
  };

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-16">
  <header className="space-y-8">
    <div className="space-y-5">
      <span className="text-sm font-black uppercase tracking-[6px] text-lime-400">
        Documentation
      </span>

      <h1 className="text-5xl font-black uppercase text-white md:text-6xl">
        NGS Rulebook
      </h1>

      <p className="max-w-3xl text-lg leading-8 text-gray-400">
        The official source for every server rule,
        gameplay standard and community expectation.
        These rules are designed to create a fair,
        immersive and enjoyable survival experience
        for everyone.
      </p>
    </div>

    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-xs font-black uppercase tracking-[2px] text-lime-400">
          Categories
        </p>

        <p className="mt-3 text-4xl font-black text-white">
          {ruleCategories.length}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-xs font-black uppercase tracking-[2px] text-lime-400">
          Rules
        </p>

        <p className="mt-3 text-4xl font-black text-white">
          {totalRules}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-xs font-black uppercase tracking-[2px] text-lime-400">
          Search
        </p>

        <p className="mt-3 text-lg font-semibold text-gray-300">
          Indexed Navigation
        </p>
      </div>
    </div>
  </header>

  <div>
  <RuleSearch
    onNavigate={handleNavigate}
  />

    <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-sm">
      <div className="text-gray-400">
        Press{" "}
        <kbd className="rounded border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs">
          /
        </kbd>{" "}
        to jump to search.
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={expandAll}
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 font-semibold text-gray-300 transition hover:border-lime-400/30 hover:bg-lime-400/10 hover:text-lime-400"
        >
          <ChevronDown size={16} />
          Expand All
        </button>

        <button
          type="button"
          onClick={collapseAll}
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 font-semibold text-gray-300 transition hover:border-lime-400/30 hover:bg-lime-400/10 hover:text-lime-400"
        >
          <ChevronUp size={16} />
          Collapse All
        </button>

        <div className="ml-2 text-gray-500">
          {totalRules} rules
        </div>
      </div>
    </div>
  </div>
  <div className="space-y-6">
  {ruleCategories.map((category) => (
    <RuleCategory
      key={category.id}
      id={category.id}
      icon={iconMap[category.icon]}
      title={category.title}
      subtitle={category.subtitle}
      description={category.description}
      introduction={category.introduction}
      version={category.version}
      lastUpdated={category.lastUpdated}
      rules={category.rules}
      query={search}
      isOpen={openCategories.has(category.id)}
      onToggle={handleToggle}
    />
  ))}
</div>
</section>
);
}