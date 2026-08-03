/**
 * Atlas world coordinates.
 *
 * Origin:
 * Top-left of the Atlas map.
 *
 * Units:
 * Atlas map units.
 */
export interface AtlasPosition {
  x: number;

  y: number;
}

export interface FieldNote {
  id: string;

  title: string;

  description: string;

  position: AtlasPosition;

  createdAt: number;

  updatedAt: number;
}

export interface RoutePoint {
  id: string;

  position: AtlasPosition;
}

export interface Route {
  id: string;

  name: string;

  points: RoutePoint[];
}

export interface MeasurePoint {
  id: string;

  position: AtlasPosition;
}