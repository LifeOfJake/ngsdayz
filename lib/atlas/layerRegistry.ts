export type AtlasLayerId =
  | "base"
  | "heartlands"
  | "field-notes"
  | "routes"
  | "measure";

export interface AtlasLayerDefinition {
  id: AtlasLayerId;
  name: string;
  description: string;
  defaultEnabled: boolean;
}

export const LAYER_REGISTRY: AtlasLayerDefinition[] = [
  {
    id: "base",
    name: "Base Map",
    description: "Primary map imagery.",
    defaultEnabled: true,
  },
  {
    id: "heartlands",
    name: "Heartlands",
    description: "The NGS Heartlands region.",
    defaultEnabled: true,
  },
  {
    id: "field-notes",
    name: "Field Notes",
    description: "Your personal discoveries.",
    defaultEnabled: true,
  },
  {
    id: "routes",
    name: "Routes",
    description: "Planned survivor routes.",
    defaultEnabled: true,
  },
  {
    id: "measure",
    name: "Measurement",
    description: "Distance measuring tools.",
    defaultEnabled: false,
  },
];