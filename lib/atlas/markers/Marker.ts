import { WorldCoordinate } from "../coordinates";

export interface AtlasMarker {
  id: string;

  position: WorldCoordinate;

  title: string;

  description?: string;

  category:
    | "settlement"
    | "military"
    | "landmark"
    | "field-note";
}