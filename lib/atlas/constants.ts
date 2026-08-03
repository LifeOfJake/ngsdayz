import type { LatLngTuple } from "leaflet";

/**
 * Atlas tile map constants.
 *
 * These values match the generated XYZ tile pyramid.
 * We'll fine-tune them later when we calibrate
 * DayZ world coordinates.
 */

export const DEFAULT_CENTER: LatLngTuple = [1024, 1024];

export const DEFAULT_ZOOM = 2;

export const DEFAULT_MIN_ZOOM = 0;

export const DEFAULT_MAX_ZOOM = 8;