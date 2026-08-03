"use client";

import { useAtlas } from "../providers/AtlasProvider";

import HeartlandsOverlay from "../overlays/HeartlandsOverlay";
import FieldNotesLayer from "../field-notes/FieldNotesLayer";
import RouteLayer from "./RouteLayer";

export default function AtlasLayers() {
  const { layers } = useAtlas();

  return (
    <>
      {layers.heartlands && (
        <HeartlandsOverlay />
      )}

      {layers["field-notes"] && (
        <FieldNotesLayer />
      )}

      {layers.routes && (
        <RouteLayer />
      )}

      {/* Measurement layer will be added later */}
    </>
  );
}