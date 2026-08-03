import { Rule, RuleCategory, RuleReference } from "./ruleTypes";

/**
 * Returns every rule from every category.
 */
export function getAllRules(categories: RuleCategory[]): Rule[] {
  return categories.flatMap((category) => category.rules);
}

/**
 * Returns every rule with its category information.
 */
export function getRuleReferences(
  categories: RuleCategory[],
): RuleReference[] {
  return categories.flatMap((category) =>
    category.rules.map((rule) => ({
      categoryId: category.id,
      categoryTitle: category.title,
      ruleId: rule.id,
      title: rule.title,
      summary: rule.summary,
    })),
  );
}

/**
 * Finds a category by ID.
 */
export function getCategory(
  categories: RuleCategory[],
  categoryId: string,
): RuleCategory | undefined {
  return categories.find((category) => category.id === categoryId);
}

/**
 * Finds a rule by ID.
 */
export function getRule(
  categories: RuleCategory[],
  ruleId: string,
): Rule | undefined {
  return getAllRules(categories).find((rule) => rule.id === ruleId);
}

/**
 * Finds the category containing a rule.
 */
export function getCategoryForRule(
  categories: RuleCategory[],
  ruleId: string,
): RuleCategory | undefined {
  return categories.find((category) =>
    category.rules.some((rule) => rule.id === ruleId),
  );
}

/**
 * Returns both the rule and its category.
 */
export function getRuleWithCategory(
  categories: RuleCategory[],
  ruleId: string,
):
  | {
      category: RuleCategory;
      rule: Rule;
    }
  | undefined {
  for (const category of categories) {
    const rule = category.rules.find((rule) => rule.id === ruleId);

    if (rule) {
      return {
        category,
        rule,
      };
    }
  }

  return undefined;
}

/**
 * Returns related rules.
 */
export function getRelatedRules(
  categories: RuleCategory[],
  rule: Rule,
): Rule[] {
  if (!rule.related?.length) {
    return [];
  }

  return rule.related
    .map((id) => getRule(categories, id))
    .filter((related): related is Rule => related !== undefined);
}

/**
 * Returns every rule within a category.
 */
export function getRulesForCategory(
  categories: RuleCategory[],
  categoryId: string,
): Rule[] {
  return getCategory(categories, categoryId)?.rules ?? [];
}

/**
 * Returns the previous rule in reading order.
 */
export function getPreviousRule(
  categories: RuleCategory[],
  ruleId: string,
): Rule | undefined {
  const rules = getAllRules(categories);

  const index = rules.findIndex((rule) => rule.id === ruleId);

  if (index <= 0) {
    return undefined;
  }

  return rules[index - 1];
}

/**
 * Returns the next rule in reading order.
 */
export function getNextRule(
  categories: RuleCategory[],
  ruleId: string,
): Rule | undefined {
  const rules = getAllRules(categories);

  const index = rules.findIndex((rule) => rule.id === ruleId);

  if (index === -1 || index >= rules.length - 1) {
    return undefined;
  }

  return rules[index + 1];
}

/**
 * Checks whether a category exists.
 */
export function hasCategory(
  categories: RuleCategory[],
  categoryId: string,
): boolean {
  return getCategory(categories, categoryId) !== undefined;
}

/**
 * Checks whether a rule exists.
 */
export function hasRule(
  categories: RuleCategory[],
  ruleId: string,
): boolean {
  return getRule(categories, ruleId) !== undefined;
}

/**
 * Total number of categories.
 */
export function getCategoryCount(
  categories: RuleCategory[],
): number {
  return categories.length;
}

/**
 * Total number of rules.
 */
export function getRuleCount(
  categories: RuleCategory[],
): number {
  return getAllRules(categories).length;
}

/**
 * Returns the first rule in the rulebook.
 */
export function getFirstRule(
  categories: RuleCategory[],
): Rule | undefined {
  return categories[0]?.rules[0];
}

/**
 * Returns the last rule in the rulebook.
 */
export function getLastRule(
  categories: RuleCategory[],
): Rule | undefined {
  const lastCategory = categories.at(-1);

  return lastCategory?.rules.at(-1);
}