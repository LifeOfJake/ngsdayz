import { RuleCategory, RuleSearchResult } from "./ruleTypes";

/**
 * Searches every rule and returns ranked results.
 */
export function searchRules(
  categories: RuleCategory[],
  query: string,
): RuleSearchResult[] {
  const search = normalise(query);

  if (!search) {
    return [];
  }

  const results: RuleSearchResult[] = [];

  for (const category of categories) {
    for (const rule of category.rules) {
      let score = 0;

      score += scoreText(rule.id, search, 1000);
      score += scoreText(rule.title, search, 500);
      score += scoreText(rule.summary, search, 300);
      score += scoreText(rule.description, search, 250);
      score += scoreText(rule.rationale, search, 150);

      score += scoreArray(rule.keywords, search, 200);
      score += scoreArray(rule.permitted, search, 120);
      score += scoreArray(rule.prohibited, search, 120);
      score += scoreArray(rule.examples, search, 80);
      score += scoreArray(rule.notes, search, 60);

      score += scoreText(category.title, search, 75);
      score += scoreText(category.subtitle, search, 50);
      score += scoreText(category.description, search, 40);
      score += scoreArray(category.searchKeywords, search, 40);

      if (score > 0) {
        results.push({
          category,
          rule,
          score,
        });
      }
    }
  }

  return results.sort(compareResults);
}

/**
 * Returns the highest scoring result.
 */
export function findBestRule(
  categories: RuleCategory[],
  query: string,
): RuleSearchResult | undefined {
  return searchRules(categories, query)[0];
}

/**
 * Returns true if any rules match.
 */
export function hasSearchResults(
  categories: RuleCategory[],
  query: string,
): boolean {
  return searchRules(categories, query).length > 0;
}

/**
 * Scores a single piece of text.
 */
function scoreText(
  value: string | undefined,
  search: string,
  weight: number,
): number {
  if (!value) {
    return 0;
  }

  const text = normalise(value);

  if (text === search) {
    return weight * 4;
  }

  if (text.startsWith(search)) {
    return weight * 3;
  }

  if (text.includes(search)) {
    return weight * 2;
  }

  const words = text.split(" ");

  for (const word of words) {
    if (word.startsWith(search)) {
      return weight;
    }
  }

  return 0;
}

/**
 * Scores an array of strings.
 */
function scoreArray(
  values: string[] | undefined,
  search: string,
  weight: number,
): number {
  if (!values?.length) {
    return 0;
  }

  return values.reduce(
    (total, value) => total + scoreText(value, search, weight),
    0,
  );
}

/**
 * Normalises text for searching.
 */
function normalise(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

/**
 * Sorts search results.
 */
function compareResults(
  a: RuleSearchResult,
  b: RuleSearchResult,
): number {
  if (a.score !== b.score) {
    return b.score - a.score;
  }

  return a.rule.id.localeCompare(b.rule.id);
}