"use client";

import {
  Pencil,
  Trash2,
} from "lucide-react";

import { useAtlas } from "../providers/AtlasProvider";

export default function FieldNotesPanel() {
  const {
    fieldNotes,
    beginEditFieldNote,
    selectFieldNote,
    selectedFieldNoteId,
  } = useAtlas();

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
          Record camps, stashes, meeting points and personal discoveries
          across Chernarus.
        </p>
      </header>

      {fieldNotes.notes.length === 0 ? (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
          <p className="text-sm text-zinc-300">
            No field notes yet.
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            Click anywhere on the map to create your first note.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {fieldNotes.notes.map((note) => {
            const selected =
              selectedFieldNoteId === note.id;

            return (
              <div
                key={note.id}
                onClick={() =>
                  selectFieldNote(note)
                }
                className={[
                  "cursor-pointer rounded-xl border p-4 transition-all duration-200",
                  selected
                    ? "border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/10"
                    : "border-zinc-800 bg-zinc-900/40 hover:border-emerald-500 hover:bg-zinc-900/70",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-white">
                      {note.title}
                    </h3>

                    {note.description && (
                      <p className="mt-2 text-sm text-zinc-400 whitespace-pre-wrap">
                        {note.description}
                      </p>
                    )}
                  </div>

                  <div
                    className="flex gap-1"
                    onClick={(event) =>
                      event.stopPropagation()
                    }
                  >
                    <button
                      onClick={() =>
                        beginEditFieldNote(note)
                      }
                      className="rounded-lg p-2 text-zinc-500 transition hover:bg-emerald-500/10 hover:text-emerald-400"
                      title="Edit note"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      onClick={() =>
                        fieldNotes.deleteNote(
                          note.id
                        )
                      }
                      className="rounded-lg p-2 text-zinc-500 transition hover:bg-red-500/10 hover:text-red-400"
                      title="Delete note"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
                  <span>
                    {note.position.x.toFixed(5)},{" "}
                    {note.position.y.toFixed(5)}
                  </span>

                  <span>
                    {new Date(
                      note.createdAt
                    ).toLocaleDateString()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}