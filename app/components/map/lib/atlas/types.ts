export type FieldNoteCategory =
  | "camp"
  | "loot"
  | "vehicle"
  | "danger"
  | "meeting"
  | "stash"
  | "personal";

export interface FieldNote {
  id: string;

  title: string;

  description: string;

  category: FieldNoteCategory;

  latitude: number;

  longitude: number;

  createdAt: string;

  updatedAt: string;
}