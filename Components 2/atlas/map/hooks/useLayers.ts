"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  AtlasLayerId,
  LAYER_REGISTRY,
} from "../../../../lib/atlas/layerRegistry";

import {
  loadLayerState,
  saveLayerState,
} from "../../../../lib/atlas/storage";

export type AtlasLayerState = Record<
  AtlasLayerId,
  boolean
>;

function createDefaultState(): AtlasLayerState {
  return LAYER_REGISTRY.reduce(
    (state, layer) => {
      state[layer.id] = layer.defaultEnabled;
      return state;
    },
    {} as AtlasLayerState
  );
}

export function useLayers() {
  const [layers, setLayers] =
    useState<AtlasLayerState>(
      createDefaultState()
    );

  const [hydrated, setHydrated] =
    useState(false);

  useEffect(() => {
    setLayers(
      loadLayerState(
        createDefaultState()
      )
    );

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    saveLayerState(layers);
  }, [layers, hydrated]);

  function toggleLayer(
    layerId: AtlasLayerId
  ) {
    setLayers((current) => ({
      ...current,
      [layerId]: !current[layerId],
    }));
  }

  function enableLayer(
    layerId: AtlasLayerId
  ) {
    setLayers((current) => ({
      ...current,
      [layerId]: true,
    }));
  }

  function disableLayer(
    layerId: AtlasLayerId
  ) {
    setLayers((current) => ({
      ...current,
      [layerId]: false,
    }));
  }

  function resetLayers() {
    setLayers(createDefaultState());
  }

  const enabledLayers = useMemo(
    () =>
      Object.entries(layers)
        .filter(([, enabled]) => enabled)
        .map(([id]) => id as AtlasLayerId),
    [layers]
  );

  return {
    layerRegistry: LAYER_REGISTRY,

    layers,

    enabledLayers,

    toggleLayer,

    enableLayer,

    disableLayer,

    resetLayers,
  };
}