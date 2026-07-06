"use client";

import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";

import {
  DEFAULT_CENTER,
  DEFAULT_MAX_ZOOM,
  DEFAULT_MIN_ZOOM,
  DEFAULT_ZOOM,
  TILE_LAYER_URL,
  TILE_LAYER_ATTRIBUTION,
} from "@/app/components/map/lib/atlas/constants";

export default function LeafletMap() {
  return (
    <MapContainer
      center={DEFAULT_CENTER}
      zoom={DEFAULT_ZOOM}
      minZoom={DEFAULT_MIN_ZOOM}
      maxZoom={DEFAULT_MAX_ZOOM}
      zoomControl={false}
      attributionControl={false}
      preferCanvas
      className="h-full w-full bg-zinc-950"
    >
      <TileLayer
        url={TILE_LAYER_URL}
        attribution={TILE_LAYER_ATTRIBUTION}
      />
    </MapContainer>
  );
}