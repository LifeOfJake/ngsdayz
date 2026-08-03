"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

import type { Map as LeafletMap } from "leaflet";

import { useLayers } from "../hooks/useLayers";
import { useFieldNotes } from "../hooks/useFieldNotes";

import type {
  AtlasPosition,
  FieldNote,
} from "../../../../lib/atlas/types";

type AtlasContextType =
  ReturnType<typeof useLayers> & {
    fieldNotes: ReturnType<typeof useFieldNotes>;

    pendingFieldNote: AtlasPosition | null;

    editingFieldNote: FieldNote | null;

    selectedFieldNoteId: string | null;

    beginFieldNote: (
      position: AtlasPosition
    ) => void;

    beginEditFieldNote: (
      note: FieldNote
    ) => void;

    selectFieldNote: (
      note: FieldNote
    ) => void;

    clearSelection: () => void;

    cancelFieldNote: () => void;

    registerMap: (
      map: LeafletMap
    ) => void;

    flyTo: (
      position: AtlasPosition,
      zoom?: number
    ) => void;
  };

const AtlasContext =
  createContext<AtlasContextType | null>(
    null
  );

interface AtlasProviderProps {
  children: ReactNode;
}

export default function AtlasProvider({
  children,
}: AtlasProviderProps) {
  const layers = useLayers();

  const fieldNotes = useFieldNotes();

  const [
    pendingFieldNote,
    setPendingFieldNote,
  ] =
    useState<AtlasPosition | null>(
      null
    );

  const [
    editingFieldNote,
    setEditingFieldNote,
  ] =
    useState<FieldNote | null>(
      null
    );

  const [
    selectedFieldNoteId,
    setSelectedFieldNoteId,
  ] =
    useState<string | null>(null);

  const [
    map,
    setMap,
  ] =
    useState<LeafletMap | null>(
      null
    );

  function registerMap(
    map: LeafletMap
  ) {
    setMap(map);
  }

  function flyTo(
    position: AtlasPosition,
    zoom?: number
  ) {
    if (!map) {
      return;
    }

    map.flyTo(
      [position.x, position.y],
      zoom ?? map.getZoom(),
      {
        duration: 0.75,
      }
    );
  }

  function beginFieldNote(
    position: AtlasPosition
  ) {
    setEditingFieldNote(null);
    setPendingFieldNote(position);
  }

  function beginEditFieldNote(
    note: FieldNote
  ) {
    setPendingFieldNote(null);
    setEditingFieldNote(note);
  }

  function selectFieldNote(
    note: FieldNote
  ) {
    setSelectedFieldNoteId(note.id);

    flyTo(note.position);
  }

  function clearSelection() {
    setSelectedFieldNoteId(null);
  }

  function cancelFieldNote() {
    setPendingFieldNote(null);
    setEditingFieldNote(null);
  }

  return (
    <AtlasContext.Provider
      value={{
        ...layers,

        fieldNotes,

        pendingFieldNote,

        editingFieldNote,

        selectedFieldNoteId,

        beginFieldNote,

        beginEditFieldNote,

        selectFieldNote,

        clearSelection,

        cancelFieldNote,

        registerMap,

        flyTo,
      }}
    >
      {children}
    </AtlasContext.Provider>
  );
}

export function useAtlas() {
  const context =
    useContext(AtlasContext);

  if (!context) {
    throw new Error(
      "useAtlas must be used inside AtlasProvider."
    );
  }

  return context;
}