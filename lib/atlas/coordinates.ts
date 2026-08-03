/**
 * Native DayZ world coordinate.
 *
 * All Atlas data is stored in this format.
 */
export interface WorldCoordinate {
  x: number;
  y: number;
}

/**
 * Coordinate on the rendered atlas image.
 */
export interface ImageCoordinate {
  x: number;
  y: number;
}