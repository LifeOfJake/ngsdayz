"use client";

import Switch from "@/Components 2/primitives/forms/Switch";

import { useAtlas } from "../providers/AtlasProvider";

export default function LayersPanel() {
  const {
    layerRegistry,
    layers,
    toggleLayer,
  } = useAtlas();

  return (
    <div className="space-y-6">

      {/* Header */}

      <header>

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Tool
        </p>

        <h2 className="mt-2 text-xl font-semibold text-white">
          Map Layers
        </h2>

        <p className="mt-2 text-sm leading-6 text-zinc-500">
          Control which layers are visible on the map.
        </p>

      </header>

      {/* Layers */}

      <div className="space-y-3">

        {layerRegistry.map((layer) => (

          <div
            key={layer.id}
            className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 transition-colors duration-200 hover:border-zinc-700"
          >

            <div className="pr-4">

              <h3 className="text-sm font-medium text-zinc-200">
                {layer.name}
              </h3>

              <p className="mt-1 text-xs leading-5 text-zinc-500">
                {layer.description}
              </p>

            </div>

            <Switch
              checked={layers[layer.id]}
              onCheckedChange={() =>
                toggleLayer(layer.id)
              }
            />

          </div>

        ))}

      </div>

    </div>
  );
}