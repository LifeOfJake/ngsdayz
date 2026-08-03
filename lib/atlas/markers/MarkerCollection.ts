import { AtlasMarker } from "./Marker";

export class MarkerCollection {
  private readonly markers =
    new Map<string, AtlasMarker>();

  add(marker: AtlasMarker) {
    this.markers.set(
      marker.id,
      marker
    );
  }

  remove(id: string) {
    this.markers.delete(id);
  }

  get(id: string) {
    return this.markers.get(id);
  }

  getAll() {
    return [...this.markers.values()];
  }

  clear() {
    this.markers.clear();
  }
}