import { useState } from "react";
import {
  AtlasLayerId,
  LAYER_REGISTRY,
} from "../../lib/atlas/layerRegistry";

export function useLayers() {
  const [enabledLayers, setEnabledLayers] = useState(
    new Set<AtlasLayerId>(
      LAYER_REGISTRY
        .filter((layer) => layer.defaultEnabled)
        .map((layer) => layer.id)
    )
  );

  function toggleLayer(id: AtlasLayerId) {
    setEnabledLayers((current) => {
      const next = new Set(current);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  }

  function isEnabled(id: AtlasLayerId) {
    return enabledLayers.has(id);
  }

  return {
    layers: LAYER_REGISTRY,
    enabledLayers,
    isEnabled,
    toggleLayer,
  };
}