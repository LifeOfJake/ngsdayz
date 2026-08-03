"use client";

import { useEffect, useState } from "react";
import {
  ArrowRightCircle,
  Check,
  CheckCircle2,
  Clock3,
  Info,
  Link2,
  ShieldAlert,
  XCircle,
} from "lucide-react";

import HighlightText from "./search/HighlightText";
import RuleAccordion from "./RuleAccordion";

import {
  ruleCategories,
  type Rule,
} from "../../../data/rules/rules";

interface RuleItemProps {
  rule: Rule;
  query: string;
}

const ruleLookup = new Map(
  ruleCategories.flatMap((category) =>
    category.rules.map(
      (rule) =>
        [rule.id.toLowerCase(), rule] as const,
    ),
  ),
);

export default function RuleItem({
  rule,
  query,
}: RuleItemProps) {
  const [copied, setCopied] =
    useState(false);

  const [highlighted, setHighlighted] =
    useState(false);

  useEffect(() => {
    const handleHighlight = (
      event: Event,
    ) => {
      const customEvent =
        event as CustomEvent<string>;

      if (
        customEvent.detail.toLowerCase() !==
        rule.id.toLowerCase()
      ) {
        return;
      }

      setHighlighted(true);

      window.setTimeout(() => {
        setHighlighted(false);
      }, 2200);
    };

    window.addEventListener(
      "highlight-rule",
      handleHighlight as EventListener,
    );

    return () => {
      window.removeEventListener(
        "highlight-rule",
        handleHighlight as EventListener,
      );
    };
  }, [rule.id]);

  const copyRuleLink = async () => {
    try {
      const url = `${window.location.origin}${window.location.pathname}#${rule.id}`;

      await navigator.clipboard.writeText(
        url,
      );

      setCopied(true);

      window.history.replaceState(
        {},
        "",
        `#${rule.id}`,
      );

      window.dispatchEvent(
        new CustomEvent(
          "highlight-rule",
          {
            detail: rule.id,
          },
        ),
      );

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(
        "Failed to copy rule link:",
        error,
      );
    }
  };

  return (
    <article
      id={rule.id}
      data-rule-id={rule.id}
      className={`scroll-mt-32 overflow-hidden rounded-2xl border transition-all duration-500 ${
        highlighted
          ? "scale-[1.01] border-lime-400 bg-lime-400/[0.05] shadow-[0_0_50px_rgba(163,230,53,0.25)] ring-2 ring-lime-400/30"
          : "border-white/10 bg-white/[0.03] hover:border-lime-400/20"
      }`}
    >
      <header className="border-b border-white/10 p-6">
        <div className="flex items-start gap-5">
          <div
            className={`rounded-xl border px-4 py-2 transition-all duration-500 ${
              highlighted
                ? "scale-105 border-lime-300 bg-lime-400/20"
                : "border-lime-400/20 bg-lime-400/10"
            }`}
          >
            <span className="font-black tracking-[2px] text-lime-400">
              {rule.id.toUpperCase()}
            </span>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-2xl font-black text-white">
                  <HighlightText
                    text={rule.title}
                    query={query}
                  />
                </h3>

                <p className="mt-3 leading-8 text-gray-400">
                  <HighlightText
                    text={rule.summary}
                    query={query}
                  />
                </p>
              </div>

              <button
                type="button"
                onClick={copyRuleLink}
                className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-bold transition ${
                  copied
                    ? "border-green-500/40 bg-green-500/10 text-green-400"
                    : "border-white/10 bg-white/5 text-gray-400 hover:border-lime-400/40 hover:bg-lime-400/10 hover:text-lime-400"
                }`}
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    Copied
                  </>
                ) : (
                  <>
                    <Link2 size={16} />
                    Copy Link
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="space-y-6 p-6">
        {rule.permitted &&
          rule.permitted.length > 0 && (
            <Section
              icon={<CheckCircle2 size={18} />}
              title="Permitted"
              colour="green"
              items={rule.permitted}
              query={query}
              defaultOpen
            />
          )}

        {rule.prohibited &&
          rule.prohibited.length > 0 && (
            <Section
              icon={<XCircle size={18} />}
              title="Prohibited"
              colour="red"
              items={rule.prohibited}
              query={query}
              defaultOpen
            />
          )}

        {rule.notes &&
          rule.notes.length > 0 && (
            <Section
              icon={<Info size={18} />}
              title="Notes"
              colour="blue"
              items={rule.notes}
              query={query}
            />
          )}
                  {rule.related &&
          rule.related.length > 0 && (
            <RelatedRules
              rules={rule.related}
              query={query}
            />
          )}

        {rule.rationale && (
          <RuleAccordion
            title="Rationale"
            icon={
              <ShieldAlert size={18} />
            }
            colour="purple"
          >
            <p className="leading-7 text-gray-300">
              <HighlightText
                text={rule.rationale}
                query={query}
              />
            </p>
          </RuleAccordion>
        )}

        {rule.examples &&
          rule.examples.length > 0 && (
            <Section
              icon={<CheckCircle2 size={18} />}
              title="Examples"
              colour="cyan"
              items={rule.examples}
              query={query}
            />
          )}

        {rule.penalties &&
          rule.penalties.length > 0 && (
            <Section
              icon={
                <ShieldAlert size={18} />
              }
              title="Possible Penalties"
              colour="orange"
              items={rule.penalties}
              query={query}
            />
          )}

        {rule.history &&
          rule.history.length > 0 && (
            <HistorySection
              history={rule.history}
              query={query}
            />
          )}

        {rule.staffNotes &&
          rule.staffNotes.length >
            0 && (
            <Section
              icon={<Info size={18} />}
              title="Staff Guidance"
              colour="slate"
              items={rule.staffNotes}
              query={query}
            />
          )}
      </div>
    </article>
  );
}

interface RelatedRulesProps {
  rules: string[];
  query: string;
}

function RelatedRules({
  rules,
  query,
}: RelatedRulesProps) {
  const navigateToRule = (
    ruleId: string,
  ) => {
    window.history.replaceState(
      {},
      "",
      `#${ruleId}`,
    );

    window.dispatchEvent(
      new HashChangeEvent("hashchange"),
    );
  };

  return (
    <RuleAccordion
      title="Related Rules"
      icon={<Link2 size={18} />}
      colour="amber"
      count={rules.length}
    >
      <div className="space-y-3">
        {rules.map((id) => {
          const linkedRule =
            ruleLookup.get(
              id.toLowerCase(),
            );

          return (
            <button
              key={id}
              type="button"
              onClick={() =>
                navigateToRule(id)
              }
              className="group flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left transition hover:border-lime-400/30 hover:bg-lime-400/10"
            >
              <div>
                <div className="font-black uppercase tracking-[2px] text-lime-400">
                  {id.toUpperCase()}
                </div>

                <div className="mt-1 text-sm text-gray-300 transition group-hover:text-white">
                  <HighlightText
                    text={
                      linkedRule?.title ??
                      "Unknown Rule"
                    }
                    query={query}
                  />
                </div>
              </div>

              <ArrowRightCircle
                size={20}
                className="text-gray-500 transition group-hover:translate-x-1 group-hover:text-lime-400"
              />
            </button>
          );
        })}
      </div>
    </RuleAccordion>
  );
}

interface HistorySectionProps {
  history: NonNullable<
    Rule["history"]
  >;
  query: string;
}

function HistorySection({
  history,
  query,
}: HistorySectionProps) {
  return (
    <RuleAccordion
      title="Rule History"
      icon={<Clock3 size={18} />}
      colour="purple"
      count={history.length}
    >
      <div className="space-y-5">
        {history.map((entry) => (
          <div
            key={`${entry.version}-${entry.date}`}
            className="rounded-xl border border-white/10 bg-black/20 p-4"
          >
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <span className="font-black text-white">
                Version{" "}
                <HighlightText
                  text={entry.version}
                  query={query}
                />
              </span>

              <span className="text-sm text-gray-500">
                <HighlightText
                  text={entry.date}
                  query={query}
                />
              </span>
            </div>

            <ul className="space-y-2">
              {entry.changes.map(
                (change) => (
                  <li
                    key={change}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-purple-400" />

                    <span className="leading-7">
                      <HighlightText
                        text={change}
                        query={query}
                      />
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
      </div>
    </RuleAccordion>
  );
}

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  colour:
    | "green"
    | "red"
    | "blue"
    | "amber"
    | "purple"
    | "cyan"
    | "orange"
    | "slate";
  items: string[];
  query: string;
  defaultOpen?: boolean;
}

function Section({
  icon,
  title,
  colour,
  items,
  query,
  defaultOpen = false,
}: SectionProps) {
  const styles = {
    green: {
      bullet: "bg-green-400",
    },

    red: {
      bullet: "bg-red-400",
    },

    blue: {
      bullet: "bg-sky-400",
    },

    amber: {
      bullet: "bg-amber-400",
    },

    purple: {
      bullet: "bg-violet-400",
    },

    cyan: {
      bullet: "bg-cyan-400",
    },

    orange: {
      bullet: "bg-orange-400",
    },

    slate: {
      bullet: "bg-slate-300",
    },
  }[colour];

  return (
    <RuleAccordion
      icon={icon}
      title={title}
      colour={colour}
      count={items.length}
      defaultOpen={defaultOpen}
    >
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-gray-300"
          >
            <span
              className={`mt-2 h-2 w-2 flex-shrink-0 rounded-full ${styles.bullet}`}
            />

            <span className="leading-7">
              <HighlightText
                text={item}
                query={query}
              />
            </span>
          </li>
        ))}
      </ul>
    </RuleAccordion>
  );
}