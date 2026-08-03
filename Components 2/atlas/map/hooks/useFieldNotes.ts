"use client";

import { useEffect, useState } from "react";

import type {
  AtlasPosition,
  FieldNote,
} from "../../../../lib/atlas/types";

import {
  loadFieldNotes,
  saveFieldNotes,
} from "../../../../lib/atlas/storage";

export function useFieldNotes() {
  const [notes, setNotes] = useState<FieldNote[]>(
    () => loadFieldNotes()
  );

  useEffect(() => {
    saveFieldNotes(notes);
  }, [notes]);

  function createNote(
    position: AtlasPosition,
    title = "Untitled Note",
    description = ""
  ) {
    const timestamp = Date.now();

    const note: FieldNote = {
      id: crypto.randomUUID(),
      title,
      description,
      position,
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    setNotes((current) => [
      ...current,
      note,
    ]);

    return note;
  }

  function updateNote(
    id: string,
    updates: Partial<
      Omit<FieldNote, "id" | "createdAt">
    >
  ) {
    setNotes((current) =>
      current.map((note) =>
        note.id === id
          ? {
              ...note,
              ...updates,
              updatedAt: Date.now(),
            }
          : note
      )
    );
  }

  function deleteNote(id: string) {
    setNotes((current) =>
      current.filter(
        (note) => note.id !== id
      )
    );
  }

  function resetNotes() {
    setNotes([]);
  }

  return {
    notes,
    createNote,
    updateNote,
    deleteNote,
    resetNotes,
  };
}