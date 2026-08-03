"use client";

import FieldNoteEditor from "./FieldNoteEditor";

import { useAtlas } from "../providers/AtlasProvider";

export default function FieldNoteModal() {
  const {
    pendingFieldNote,
    editingFieldNote,
    cancelFieldNote,
    fieldNotes,
  } = useAtlas();

  if (!pendingFieldNote && !editingFieldNote) {
    return null;
  }

  function handleSave(
    title: string,
    description: string
  ) {
    if (editingFieldNote) {
      fieldNotes.updateNote(
        editingFieldNote.id,
        {
          title,
          description,
        }
      );
    } else if (pendingFieldNote) {
      fieldNotes.createNote(
        pendingFieldNote,
        title,
        description
      );
    }

    cancelFieldNote();
  }

  return (
    <div className="pointer-events-none absolute inset-0 z-[1000] flex items-center justify-center">

      <div className="pointer-events-auto">

        <FieldNoteEditor
          initialTitle={
            editingFieldNote?.title ?? ""
          }
          initialDescription={
            editingFieldNote?.description ?? ""
          }
          onSave={handleSave}
          onCancel={cancelFieldNote}
        />

      </div>

    </div>
  );
}