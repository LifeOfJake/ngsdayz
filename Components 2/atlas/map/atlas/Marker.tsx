"use client";

import { useMemo } from "react";
import L from "leaflet";
import {
  Marker as LeafletMarker,
  MarkerProps,
} from "react-leaflet";

export default function Marker(
  props: MarkerProps
) {
  const icon = useMemo(
    () =>
      L.icon({
        iconUrl: "/marker-icon.png",
        iconRetinaUrl: "/marker-icon-2x.png",
        shadowUrl: "/marker-shadow.png",

        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      }),
    []
  );

  return (
    <LeafletMarker
      {...props}
      icon={icon}
    />
  );
}