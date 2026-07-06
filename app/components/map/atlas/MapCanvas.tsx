"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(
  () => import("./LeafletMap"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-zinc-950 text-sm text-zinc-500">
        Loading Atlas...
      </div>
    ),
  }
);

export default function MapCanvas() {
  return <LeafletMap />;
}