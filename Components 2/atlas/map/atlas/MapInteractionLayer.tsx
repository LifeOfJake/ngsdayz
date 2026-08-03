"use client";

import { useMapEvents } from "react-leaflet";

import { useAtlas } from "../providers/AtlasProvider";

export default function MapInteractionLayer() {
  const {
    pendingFieldNote,
    beginFieldNote,
  } = useAtlas();

  useMapEvents({
    click(event) {
      // Don't allow another placement while one
      // is already being edited.
      if (pendingFieldNote) {
        return;
      }

      beginFieldNote({
        x: event.latlng.lat,
        y: event.latlng.lng,
      });
    },
  });

  return null;
}