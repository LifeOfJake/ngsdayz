"use client";

export default function SettingsPanel() {
  return (
    <div className="space-y-6">

      <header>

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Tool
        </p>

        <h2 className="mt-2 text-xl font-semibold text-white">
          Settings
        </h2>

        <p className="mt-2 text-sm leading-6 text-zinc-500">
          Configure your Atlas experience.
        </p>

      </header>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">

        <p className="text-sm text-zinc-300">
          Atlas settings will appear here.
        </p>

      </div>

    </div>
  );
}