"use client";

import "leaflet/dist/leaflet.css";

import { useEffect } from "react";

import L from "leaflet";
import {
  MapContainer,
  useMap,
} from "react-leaflet";

import BaseMapProvider from "./BaseMapProvider";

const MAP_BOUNDS: L.LatLngBoundsExpression = [
  [0, 0],
  [15360, 15360],
];

function InitialView() {
  const map = useMap();

  useEffect(() => {
    requestAnimationFrame(() => {
      map.invalidateSize();

      const zoom = map.getBoundsZoom(MAP_BOUNDS);

      console.log("Calculated zoom:", zoom);

      map.setView([7680, 7680], zoom);

      map.setMaxBounds(MAP_BOUNDS);
    });
  }, [map]);

  return null;
}

export default function ClientLeafletMap() {
  return (
    <MapContainer
      crs={L.CRS.Simple}
      center={[7680, 7680]}
      zoom={0}
      minZoom={-4}
      maxZoom={2}
      maxBoundsViscosity={1}
      zoomControl={false}
      attributionControl={false}
      className="h-full w-full bg-zinc-950"
    >
      <BaseMapProvider />
      <InitialView />
    </MapContainer>
  );
}