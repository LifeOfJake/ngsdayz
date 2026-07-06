"use client";

export default function FieldNotesPanel() {
  return (
    <div className="space-y-6">

      <header>

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Tool
        </p>

        <h2 className="mt-2 text-xl font-semibold text-white">
          Field Notes
        </h2>

        <p className="mt-2 text-sm leading-6 text-zinc-500">
          Record camps, stashes, meeting points and personal discoveries across Chernarus.
        </p>

      </header>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">

        <p className="text-sm text-zinc-300">
          No field notes yet.
        </p>

        <p className="mt-2 text-sm text-zinc-500">
          Create your first note using the button at the bottom of the sidebar.
        </p>

      </div>

    </div>
  );
}