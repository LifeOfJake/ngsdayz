import { Server } from "../data";

import {
  Button,
  Card,
} from "../ui";

interface ServerCardProps {
  server: Server;
}

export default function ServerCard({
  server,
}: ServerCardProps) {
  const percentage =
    (server.players / server.maxPlayers) * 100;

  const status = {
    Online: {
      colour: "bg-lime-400",
      label: "OPERATIONAL",
    },

    Restarting: {
      colour: "bg-yellow-400",
      label: "RESTARTING",
    },

    Offline: {
      colour: "bg-red-500",
      label: "OFFLINE",
    },

    "Coming Soon": {
      colour: "bg-blue-400",
      label: "COMING SOON",
    },
  }[server.status];

  return (
    <Card
      variant="glass"
      padding="lg"
      className="h-full"
    >
      <div className="flex items-center gap-3">

        <span
          className={`h-3 w-3 rounded-full ${status.colour}`}
        />

        <p className="text-xs font-black uppercase tracking-[4px] text-gray-300">
          {status.label}
        </p>

      </div>

      <h3 className="mt-6 text-3xl font-black text-white">
        {server.name}
      </h3>

      <p className="mt-2 text-gray-400">
        {server.subtitle}
      </p>

      {server.status === "Online" ? (
        <>
          <div className="mt-10">

            <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-lime-400">
              Survivors
            </p>

            <div className="h-3 overflow-hidden rounded-full bg-white/10">

              <div
                className="h-full rounded-full bg-lime-400"
                style={{
                  width: `${percentage}%`,
                }}
              />

            </div>

            <p className="mt-3 font-bold text-white">
              {server.players} / {server.maxPlayers}
            </p>

          </div>

          <div className="mt-10 space-y-4">

            <Row
              label="Queue"
              value={server.queue}
            />

            <Row
              label="Restart"
              value={server.restart}
            />

            <Row
              label="Map"
              value={server.map}
            />

            <Row
              label="Platform"
              value={server.platform}
            />

          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-5">

            <p className="text-xs font-black uppercase tracking-[4px] text-lime-400">
              Connection
            </p>

            <p className="mt-3 break-all font-bold text-white">
              {server.ip}:{server.port}
            </p>

          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">

            <Button variant="secondary">
              Copy IP
            </Button>

            <Button>
              Deploy
            </Button>

          </div>
        </>
      ) : (
        <>
          <div className="mt-10 space-y-4">

            <Row
              label="Map"
              value={server.map}
            />

            <Row
              label="Platform"
              value={server.platform}
            />

          </div>

          <p className="mt-10 text-gray-400">
            Follow development as we prepare the
            next deployment.
          </p>

          <Button
            className="mt-8"
            fullWidth
          >
            Learn More
          </Button>
        </>
      )}
    </Card>
  );
}

interface RowProps {
  label: string;
  value: React.ReactNode;
}

function Row({
  label,
  value,
}: RowProps) {
  return (
    <div className="flex justify-between">

      <span className="text-gray-400">
        {label}
      </span>

      <span className="font-bold text-white">
        {value}
      </span>

    </div>
  );
}