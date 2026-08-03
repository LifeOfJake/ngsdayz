"use client";

import { ChevronDown, Clock, FileText, Info } from "lucide-react";
import { ReactNode } from "react";

import HighlightText from "./search/HighlightText";
import RuleItem from "./RuleItem";

import type { Rule } from "../../../data/rules/rules";

interface RuleCategoryProps {
  id: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  introduction: string;
  version: string;
  lastUpdated: string;
  rules: Rule[];
  query: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

export default function RuleCategory({
  id,
  icon,
  title,
  subtitle,
  description,
  introduction,
  version,
  lastUpdated,
  rules,
  query,
  isOpen,
  onToggle,
}: RuleCategoryProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl transition-all duration-300">
      <button
        type="button"
        onClick={() => onToggle(id)}
        className="group flex w-full items-center justify-between gap-8 p-8 text-left transition-colors hover:bg-white/[0.03]"
      >
        <div className="flex flex-1 items-start gap-6">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-lime-400 transition duration-300 group-hover:scale-105 group-hover:bg-lime-400/15">
            {icon}
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-black uppercase tracking-[4px] text-lime-400">
              <HighlightText
                text={subtitle}
                query={query}
              />
            </p>

            <h2 className="mt-2 text-4xl font-black uppercase text-white">
              <HighlightText
                text={title}
                query={query}
              />
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-gray-400">
              <HighlightText
                text={description}
                query={query}
              />
            </p>
          </div>
        </div>

        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
            isOpen
              ? "border-lime-400/30 bg-lime-400/10 text-lime-400"
              : "border-white/10 bg-white/5 text-gray-400 group-hover:border-lime-400/20 group-hover:text-lime-400"
          }`}
        >
          <ChevronDown
            size={24}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/10 bg-black/20 p-8">
            <section className="mb-8 rounded-2xl border border-lime-400/20 bg-gradient-to-br from-lime-400/10 to-lime-400/5 p-6">
              <div className="mb-4 flex items-center gap-2 text-lime-400">
                <Info size={18} />

                <span className="text-sm font-black uppercase tracking-[2px]">
                  Why These Rules Exist
                </span>
              </div>

              <p className="leading-8 text-gray-300">
                <HighlightText
                  text={introduction}
                  query={query}
                />
              </p>
            </section>

            <div className="mb-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-lime-400/20 hover:bg-white/[0.05]">
                <div className="mb-2 flex items-center gap-2 text-lime-400">
                  <FileText size={18} />

                  <span className="text-xs font-black uppercase tracking-[2px]">
                    Version
                  </span>
                </div>

                <p className="text-2xl font-black text-white">
                  {version}
                </p>
              </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-lime-400/20 hover:bg-white/[0.05]">
                <div className="mb-2 flex items-center gap-2 text-lime-400">
                  <Clock size={18} />

                  <span className="text-xs font-black uppercase tracking-[2px]">
                    Last Updated
                  </span>
                </div>

                <p className="text-2xl font-black text-white">
                  {lastUpdated}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-lime-400/20 hover:bg-white/[0.05]">
                <div className="mb-2 flex items-center gap-2 text-lime-400">
                  <FileText size={18} />

                  <span className="text-xs font-black uppercase tracking-[2px]">
                    Rules
                  </span>
                </div>

                <p className="text-2xl font-black text-white">
                  {rules.length}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {rules.map((rule) => (
                <RuleItem
                  key={rule.id}
                  rule={rule}
                  query={query}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}