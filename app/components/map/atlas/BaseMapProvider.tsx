"use client";

import { TileLayer } from "react-leaflet";

import {
  TILE_LAYER_URL,
  TILE_LAYER_ATTRIBUTION,
} from "@/app/components/map/lib/atlas/constants";

export default function BaseMapProvider() {
  return (
    <TileLayer
      attribution={TILE_LAYER_ATTRIBUTION}
      url={TILE_LAYER_URL}
    />
  );
}