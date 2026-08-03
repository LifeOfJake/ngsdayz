import { WorldCoordinate } from "./coordinates";

/**
 * Parses coordinates entered by the user.
 *
 * Supported formats:
 * 7500 12500
 * 7500,12500
 * 7500, 12500
 */
export function parseCoordinates(
  input: string
): WorldCoordinate | null {
  const cleaned = input.trim();

  const match = cleaned.match(
    /^(\d+(?:\.\d+)?)\s*,?\s*(\d+(?:\.\d+)?)$/
  );

  if (!match) {
    return null;
  }

  const x = Number(match[1]);
  const y = Number(match[2]);

  if (!isValidCoordinate({ x, y })) {
    return null;
  }

  return { x, y };
}

export function isValidCoordinate(
  point: WorldCoordinate
): boolean {
  return (
    point.x >= 0 &&
    point.x <= 15360 &&
    point.y >= 0 &&
    point.y <= 15360
  );
}