import type { LatLngTuple } from "leaflet";

/**
 * Temporary map values.
 * These will be replaced once Atlas ships with
 * its own custom NGS cartography.
 */

export const DEFAULT_CENTER: LatLngTuple = [54.2, 37.6];

export const DEFAULT_ZOOM = 3;

export const DEFAULT_MIN_ZOOM = 2;

export const DEFAULT_MAX_ZOOM = 7;

export const TILE_LAYER_URL =
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

export const TILE_LAYER_ATTRIBUTION =
  "&copy; OpenStreetMap contributors";