import Fuse from "fuse.js";

import type {
  Rule,
  RuleCategory,
} from "@/data/rules/rules";

import type {
  SearchDocument,
  SearchField,
  SearchFieldData,
  SearchIndex,
  SearchIndexData,
} from "@/types/search";

/**
 * Adds a searchable field.
 */
function addField(
  fields: SearchFieldData[],
  search: SearchIndexData,
  field: SearchField,
  value: string | undefined,
  weight: number,
) {
  if (!value?.trim()) {
    return;
  }

  fields.push({
    field,
    text: value,
    normalized: value.toLowerCase(),
    weight,
  });

  search[field] += `${value} `;
}

/**
 * Adds multiple searchable values.
 */
function addArray(
  fields: SearchFieldData[],
  search: SearchIndexData,
  field: SearchField,
  values: string[] | undefined,
  weight: number,
) {
  if (!values) {
    return;
  }

  for (const value of values) {
    addField(
      fields,
      search,
      field,
      value,
      weight,
    );
  }
}

function createSearchObject(): SearchIndexData {
  return {
    id: "",
    title: "",
    subtitle: "",
    summary: "",
    description: "",
    introduction: "",
    rationale: "",
    permitted: "",
    prohibited: "",
    notes: "",
    examples: "",
    penalties: "",
    related: "",
    history: "",
    keywords: "",
  };
}

function buildRuleDocument(
  category: RuleCategory,
  rule: Rule,
): SearchDocument {
  const fields: SearchFieldData[] = [];
  const search = createSearchObject();

  addField(fields, search, "id", rule.id, 95);
  addField(fields, search, "title", rule.title, 100);
  addField(
    fields,
    search,
    "summary",
    rule.summary,
    80,
  );
  addField(
    fields,
    search,
    "rationale",
    rule.rationale,
    65,
  );

  addArray(
    fields,
    search,
    "permitted",
    rule.permitted,
    55,
  );

  addArray(
    fields,
    search,
    "prohibited",
    rule.prohibited,
    55,
  );

  addArray(
    fields,
    search,
    "notes",
    rule.notes,
    40,
  );

  addArray(
    fields,
    search,
    "examples",
    rule.examples,
    35,
  );

  addArray(
    fields,
    search,
    "penalties",
    rule.penalties,
    30,
  );

  addArray(
    fields,
    search,
    "related",
    rule.related,
    20,
  );

  if (rule.history) {
    for (const history of rule.history) {
      addArray(
        fields,
        search,
        "history",
        history.changes,
        10,
      );
    }
  }

  return {
    id: rule.id,
    type: "rule",

    title: rule.title,
    subtitle: rule.summary,

    icon: category.icon,

    anchorId: rule.id,

    categoryId: category.id,
    categoryTitle: category.title,

    fields,
    search,
  };
}

function buildCategoryDocument(
  category: RuleCategory,
): SearchDocument {
  const fields: SearchFieldData[] = [];
  const search = createSearchObject();

  addField(
    fields,
    search,
    "title",
    category.title,
    100,
  );

  addField(
    fields,
    search,
    "subtitle",
    category.subtitle,
    80,
  );

  addField(
    fields,
    search,
    "description",
    category.description,
    60,
  );

  addField(
    fields,
    search,
    "introduction",
    category.introduction,
    50,
  );

  addArray(
    fields,
    search,
    "keywords",
    category.searchKeywords,
    90,
  );

  return {
    id: category.id,
    type: "category",

    title: category.title,
    subtitle: category.subtitle,

    icon: category.icon,

    anchorId: category.id,

    categoryId: category.id,
    categoryTitle: category.title,

    fields,
    search,
  };
}

/**
 * Converts the rulebook into a searchable Fuse index.
 */
export function buildSearchIndex(
  categories: RuleCategory[],
): SearchIndex {
  const documents: SearchDocument[] = [];

  for (const category of categories) {
    documents.push(
      buildCategoryDocument(category),
    );

    for (const rule of category.rules) {
      documents.push(
        buildRuleDocument(category, rule),
      );
    }
  }

  const fuse = new Fuse(documents, {
    includeScore: true,
    includeMatches: true,
    ignoreLocation: true,
    threshold: 0.45,
    minMatchCharLength: 2,

    keys: [
      { name: "search.id", weight: 1.0 },
      { name: "search.title", weight: 0.95 },
      { name: "search.keywords", weight: 0.9 },
      {
        name: "search.summary",
        weight: 0.8,
      },
      {
        name: "search.subtitle",
        weight: 0.75,
      },
      {
        name: "search.description",
        weight: 0.6,
      },
      {
        name: "search.introduction",
        weight: 0.55,
      },
      {
        name: "search.rationale",
        weight: 0.5,
      },
      {
        name: "search.permitted",
        weight: 0.45,
      },
      {
        name: "search.prohibited",
        weight: 0.45,
      },
      { name: "search.notes", weight: 0.4 },
      {
        name: "search.examples",
        weight: 0.35,
      },
      {
        name: "search.penalties",
        weight: 0.3,
      },
      {
        name: "search.related",
        weight: 0.25,
      },
      {
        name: "search.history",
        weight: 0.2,
      },
    ],
  });

  return {
    documents,
    fuse,
  };
}