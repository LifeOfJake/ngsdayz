"use client";

import { useMapEvents } from "react-leaflet";

interface Props {
  enabled: boolean;
  onPlace: (lat: number, lng: number) => void;
}

export default function FieldNotePlacement({
  enabled,
  onPlace,
}: Props) {
  useMapEvents({
    click(e) {
      if (!enabled) return;

      onPlace(
        e.latlng.lat,
        e.latlng.lng
      );
    },
  });

  return null;
}