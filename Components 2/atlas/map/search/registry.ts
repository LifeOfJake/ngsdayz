import type { SearchResult } from "./sources/types";

export interface SearchSource {
  search(
    query: string
  ): SearchResult[];
}

class SearchRegistry {
  private readonly sources: SearchSource[] =
    [];

  register(
    source: SearchSource
  ) {
    this.sources.push(source);
  }

  unregister(
    source: SearchSource
  ) {
    const index =
      this.sources.indexOf(source);

    if (index >= 0) {
      this.sources.splice(index, 1);
    }
  }

  search(
    query: string
  ): SearchResult[] {
    return this.sources.flatMap(
      (source) =>
        source.search(query)
    );
  }
}

export const searchRegistry =
  new SearchRegistry();