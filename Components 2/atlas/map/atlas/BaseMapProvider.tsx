"use client";

import { ImageOverlay } from "react-leaflet";

const BOUNDS: [[number, number], [number, number]] = [
  [0, 0],
  [15360, 15360],
];

export default function BaseMapProvider() {
  return (
    <ImageOverlay
      url="/atlas/maps/chernarus-v0.1.webp"
      bounds={BOUNDS}
    />
  );
}