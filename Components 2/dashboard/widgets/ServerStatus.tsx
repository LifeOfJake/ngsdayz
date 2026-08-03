import Badge from "@/Components 2/primitives/display/Badge";

import { Section } from "@/components/ui";

import {
  SERVER_STATUS_VARIANTS,
  servers,
  type Server,
} from "@/data/servers/servers";

function getPopulation(server: Server) {
  return server.status === "Online"
    ? `${server.players} / ${server.maxPlayers}`
    : "—";
}

export function ServerStatus() {
  return (
    <Section
      title="Server Status"
      description="Current status of all NGS servers."
    >
      <div className="divide-y divide-border">
        {servers.map((server) => (
          <div
            key={server.id}
            className="flex items-center justify-between px-6 py-4"
          >
            <div className="min-w-0">
              <h3 className="font-medium">{server.name}</h3>

              <p className="text-sm text-muted-foreground">
                {server.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <Badge variant={SERVER_STATUS_VARIANTS[server.status]}>
                {server.status}
              </Badge>

              <div className="w-24 text-right text-sm text-muted-foreground">
                {getPopulation(server)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}