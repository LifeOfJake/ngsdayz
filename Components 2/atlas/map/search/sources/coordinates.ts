import {
  isValidCoordinate,
  parseCoordinates,
} from "../../../../../lib/atlas/coordinateParser";

import type {
  SearchResult,
} from "./types";

export function searchCoordinates(
  query: string,
  onSelect: (
    x: number,
    y: number
  ) => void
): SearchResult[] {
  const coordinate =
    parseCoordinates(query);

  if (!coordinate) {
    return [];
  }

  if (
    !isValidCoordinate(
      coordinate
    )
  ) {
    return [];
  }

  return [
    {
      id: `coordinate-${coordinate.x}-${coordinate.y}`,

      type: "coordinate",

      title: "Coordinate",

      subtitle: `${coordinate.x}, ${coordinate.y}`,

      action() {
        onSelect(
          coordinate.x,
          coordinate.y
        );
      },
    },
  ];
}