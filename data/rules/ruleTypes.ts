/**
 * Available icons for rule categories.
 */
export const RULE_ICONS = [
  "shield",
  "swords",
  "hammer",
  "car",
  "coins",
  "users",
  "shield-alert",
  "life-buoy",
  "crosshair",
  "car",
] as const;

export type RuleIcon = (typeof RULE_ICONS)[number];

/**
 * A single rule within a category.
 */
export interface Rule {
  /**
   * Unique rule identifier.
   *
   * Examples:
   * G-01
   * C-03
   * B-05
   */
  id: string;

  /**
   * Rule title.
   */
  title: string;

  /**
   * Short summary displayed in cards, lists and search results.
   */
  summary: string;

  /**
   * The full rule statement.
   *
   * This should clearly explain what players are expected to do.
   */
  description: string;

  /**
   * Explains why this rule exists.
   */
  rationale?: string;

  /**
   * Things players MAY do.
   */
  permitted?: string[];

  /**
   * Things players MUST NOT do.
   */
  prohibited?: string[];

  /**
   * Common scenarios and examples.
   */
  examples?: string[];

  /**
   * Additional clarification.
   */
  notes?: string[];

  /**
   * Internal staff guidance.
   *
   * This should never be shown publicly.
   */
  staffNotes?: string[];

  /**
   * Related rule IDs.
   *
   * Example:
   * ["C-01", "E-02"]
   */
  related?: string[];

  /**
   * Additional search keywords.
   *
   * Allows searches using common terms or synonyms.
   */
  keywords?: string[];
}

/**
 * A collection of related rules.
 */
export interface RuleCategory {
  /**
   * Internal identifier.
   */
  id: string;

  /**
   * Display name.
   */
  title: string;

  /**
   * Short subtitle.
   */
  subtitle: string;

  /**
   * Category icon.
   */
  icon: RuleIcon;

  /**
   * Accent colour used throughout the UI.
   */
  colour: string;

  /**
   * Brief description shown in category cards.
   */
  description: string;

  /**
   * Introductory text shown at the top of the category page.
   */
  introduction: string;

  /**
   * Rulebook version.
   */
  version: string;

  /**
   * Last updated date.
   */
  lastUpdated: string;

  /**
   * Additional category search terms.
   */
  searchKeywords?: string[];

  /**
   * Rules contained within this category.
   */
  rules: Rule[];
}

/**
 * Search result returned by the rule search engine.
 */
export interface RuleSearchResult {
  category: RuleCategory;
  rule: Rule;
  score: number;
}

/**
 * Lightweight rule reference used for navigation,
 * breadcrumbs and related rules.
 */
export interface RuleReference {
  categoryId: string;
  categoryTitle: string;
  ruleId: string;
  title: string;
  summary: string;
}