"use client";

import { Check } from "lucide-react";

import {
  LAYER_REGISTRY,
} from "@/app/components/map/lib/atlas/layerRegistry";

export default function LayersPanel() {
  return (
    <div className="flex h-full flex-col">

      {/* Panel Header */}

      <header className="mb-6">

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Tool
        </p>

        <h2 className="mt-2 text-xl font-semibold text-white">
          Map Layers
        </h2>

        <p className="mt-2 text-sm leading-6 text-zinc-500">
          Control which information is visible on the map.
        </p>

      </header>

      {/* Layer List */}

      <div className="flex flex-col gap-2">

        {LAYER_REGISTRY.map((layer) => (

          <button
            key={layer.id}
            className="group flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-left transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900"
          >

            <div>

              <p className="text-sm font-medium text-zinc-200 group-hover:text-white">
                {layer.name}
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                {layer.description}
              </p>

            </div>

            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500/10">

              <Check
                size={14}
                className="text-emerald-400"
              />

            </div>

          </button>

        ))}

      </div>

    </div>
  );
}