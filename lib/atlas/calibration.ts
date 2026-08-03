export const WORLD_SIZE = 15360;

export const IMAGE_SIZE = 4000;

/*
 * Temporary linear calibration.
 *
 * Later this will be replaced with a proper
 * calibration generated from QGIS control points.
 */

export const SCALE =
  IMAGE_SIZE / WORLD_SIZE;