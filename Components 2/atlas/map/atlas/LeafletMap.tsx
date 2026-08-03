"use client";

import dynamic from "next/dynamic";

const ClientLeafletMap = dynamic(
  () => import("./ClientLeafletMap"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-zinc-950 text-zinc-500">
        Loading Atlas...
      </div>
    ),
  }
);

export default function LeafletMap() {
  return <ClientLeafletMap />;
}