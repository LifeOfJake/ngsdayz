"use client";

import { SidebarPanel } from "./SidebarNavigation";

import LayersPanel from "../panels/LayersPanel";
import FieldNotesPanel from "../panels/FieldNotesPanel";
import RoutePlannerPanel from "../panels/RoutePlannerPanel";
import MeasurePanel from "../panels/MeasurePanel";
import SettingsPanel from "../panels/SettingsPanel";

interface SidebarWorkspaceProps {
  activePanel: SidebarPanel;
}

export default function SidebarWorkspace({
  activePanel,
}: SidebarWorkspaceProps) {

  function renderPanel() {
    switch (activePanel) {

      case "layers":
        return <LayersPanel />;

      case "notes":
        return <FieldNotesPanel />;

      case "routes":
        return <RoutePlannerPanel />;

      case "measure":
        return <MeasurePanel />;

      case "settings":
        return <SettingsPanel />;

      default:
        return <LayersPanel />;

    }
  }

  return (
    <div className="h-full overflow-y-auto">

      <div className="p-6">

        {renderPanel()}

      </div>

    </div>
  );
}