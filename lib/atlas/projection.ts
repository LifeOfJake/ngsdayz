import {
  ImageCoordinate,
  WorldCoordinate,
} from "./coordinates";

export const WORLD_SIZE = 15360;

export const IMAGE_SIZE = 4000;

const SCALE =
  IMAGE_SIZE / WORLD_SIZE;

/**
 * Converts DayZ world coordinates
 * into atlas image coordinates.
 */
export function worldToImage(
  point: WorldCoordinate
): ImageCoordinate {
  return {
    x: point.x * SCALE,
    y: IMAGE_SIZE - point.y * SCALE,
  };
}

/**
 * Converts atlas image coordinates
 * back into DayZ world coordinates.
 */
export function imageToWorld(
  point: ImageCoordinate
): WorldCoordinate {
  return {
    x: point.x / SCALE,
    y: (IMAGE_SIZE - point.y) / SCALE,
  };
}