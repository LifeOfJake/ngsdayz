"use client";

import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

interface Rule {
  title: string;
  description: string;
}

interface RuleCardProps {
  id: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  rules: Rule[];
  isOpen: boolean;
  onToggle: (id: string) => void;
}

export default function RuleCard({
  id,
  icon,
  title,
  subtitle,
  description,
  rules,
  isOpen,
  onToggle,
}: RuleCardProps) {
  return (
    <div
      id={id}
      className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl transition-all duration-300"
    >
      {/* Header */}

      <button
        onClick={() => onToggle(id)}
        className="group flex w-full items-center justify-between p-8 text-left transition duration-300 hover:bg-white/5"
      >
        <div className="flex items-center gap-6">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition duration-300 group-hover:scale-110">

            {icon}

          </div>

          <div>

            <p className="text-sm font-black uppercase tracking-[4px] text-lime-400">
              {subtitle}
            </p>

            <h3 className="mt-2 text-3xl font-black uppercase text-white">
              {title}
            </h3>

            <p className="mt-3 max-w-2xl leading-7 text-gray-400">
              {description}
            </p>

          </div>

        </div>

        <ChevronDown
          size={34}
          className={`text-lime-400 transition-all duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />

      </button>

      {/* Expandable */}

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">

          <div className="border-t border-white/10 bg-black/30 px-8 py-8">

            <div className="mb-8 flex items-center justify-between">

              <h4 className="text-xl font-black uppercase tracking-[3px] text-white">
                Rules
              </h4>

              <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-black uppercase tracking-[2px] text-lime-400">
                {rules.length} Rule{rules.length !== 1 ? "s" : ""}
              </span>

            </div>

            <div className="space-y-5">

              {rules.map((rule, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-lime-400/20 hover:bg-lime-400/[0.03]"
                >
                  <div className="flex items-start gap-4">

                    <div className="mt-1 h-3 w-3 rounded-full bg-lime-400" />

                    <div>

                      <h5 className="text-lg font-bold text-white">
                        {rule.title}
                      </h5>

                      <p className="mt-2 leading-7 text-gray-400">
                        {rule.description}
                      </p>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}