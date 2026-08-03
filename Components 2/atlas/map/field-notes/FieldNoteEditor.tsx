"use client";

import {
  useEffect,
  useState,
} from "react";

interface FieldNoteEditorProps {
  initialTitle?: string;

  initialDescription?: string;

  onSave: (
    title: string,
    description: string
  ) => void;

  onCancel: () => void;
}

export default function FieldNoteEditor({
  initialTitle = "",
  initialDescription = "",
  onSave,
  onCancel,
}: FieldNoteEditorProps) {
  const [title, setTitle] = useState(
    initialTitle
  );

  const [
    description,
    setDescription,
  ] = useState(initialDescription);

  useEffect(() => {
    setTitle(initialTitle);
    setDescription(initialDescription);
  }, [
    initialTitle,
    initialDescription,
  ]);

  const editing =
    initialTitle !== "" ||
    initialDescription !== "";

  return (
    <div className="w-80 rounded-xl border border-zinc-800 bg-zinc-950 p-5 shadow-xl">

      <h2 className="text-lg font-semibold text-white">
        {editing
          ? "Edit Field Note"
          : "New Field Note"}
      </h2>

      <p className="mt-1 text-sm text-zinc-500">
        {editing
          ? "Update your field note."
          : "Record something worth remembering."}
      </p>

      <div className="mt-5 space-y-4">

        <div>

          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(event) =>
              setTitle(
                event.target.value
              )
            }
            placeholder="Military Camp"
            className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white outline-none transition focus:border-emerald-500"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Description
          </label>

          <textarea
            rows={5}
            value={description}
            onChange={(event) =>
              setDescription(
                event.target.value
              )
            }
            placeholder="Found an NBC suit here..."
            className="w-full resize-none rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white outline-none transition focus:border-emerald-500"
          />

        </div>

      </div>

      <div className="mt-6 flex justify-end gap-3">

        <button
          onClick={onCancel}
          className="rounded-lg border border-zinc-800 px-4 py-2 text-sm text-zinc-400 transition hover:border-zinc-700 hover:text-white"
        >
          Cancel
        </button>

        <button
          onClick={() =>
            onSave(
              title.trim(),
              description.trim()
            )
          }
          className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-emerald-400"
        >
          {editing
            ? "Save Changes"
            : "Save Note"}
        </button>

      </div>

    </div>
  );
}