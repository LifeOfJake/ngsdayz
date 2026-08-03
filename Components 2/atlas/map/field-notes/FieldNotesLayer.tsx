"use client";

import { Pencil, Trash2 } from "lucide-react";
import { Popup } from "react-leaflet";

import Marker from "../atlas/Marker";
import { useAtlas } from "../providers/AtlasProvider";

export default function FieldNotesLayer() {
  const {
    fieldNotes,
    beginEditFieldNote,
  } = useAtlas();

  return (
    <>
      {fieldNotes.notes.map((note) => (
        <Marker
          key={note.id}
          position={[
            note.position.lat,
            note.position.lng,
          ]}
        >
          <Popup minWidth={260}>
            <div className="space-y-3">

              <div className="flex items-start justify-between gap-3">

                <div className="flex-1">

                  <h3 className="font-semibold text-zinc-900">
                    {note.title}
                  </h3>

                  {note.description && (
                    <p className="mt-2 text-sm text-zinc-700 whitespace-pre-wrap">
                      {note.description}
                    </p>
                  )}

                </div>

                <div className="flex gap-1">

                  <button
                    onClick={() =>
                      beginEditFieldNote(note)
                    }
                    className="rounded p-1 text-zinc-500 transition hover:bg-emerald-100 hover:text-emerald-600"
                    title="Edit note"
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    onClick={() =>
                      fieldNotes.deleteNote(note.id)
                    }
                    className="rounded p-1 text-zinc-500 transition hover:bg-red-100 hover:text-red-600"
                    title="Delete note"
                  >
                    <Trash2 size={16} />
                  </button>

                </div>

              </div>

              <div className="border-t border-zinc-200 pt-2 text-xs text-zinc-500">

                <div>
                  <strong>Coordinates</strong>
                </div>

                <div>
                  {note.position.lat.toFixed(5)},{" "}
                  {note.position.lng.toFixed(5)}
                </div>

              </div>

            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
}