import { Server } from "../data";
import {
  Button,
  Card,
  ClipboardButton,
} from "../ui";

interface ServerCardProps {
  server: Server;
}

export default function ServerCard({
  server,
}: ServerCardProps) {
  const percentage =
    server.maxPlayers > 0
      ? Math.round((server.players / server.maxPlayers) * 100)
      : 0;

  const online = server.status === "Online";
  const restarting = server.status === "Restarting";
  const offline = server.status === "Offline";
  const comingSoon = server.status === "Coming Soon";

  const status = {
    Online: {
      dot: "bg-lime-400",
      border: "border-lime-400/25",
      badge: "bg-lime-400/10 text-lime-400",
      label: "Operational",
    },
    Restarting: {
      dot: "bg-yellow-400",
      border: "border-yellow-400/25",
      badge: "bg-yellow-400/10 text-yellow-300",
      label: "Restarting",
    },
    Offline: {
      dot: "bg-red-500",
      border: "border-red-500/25",
      badge: "bg-red-500/10 text-red-300",
      label: "Offline",
    },
    "Coming Soon": {
      dot: "bg-blue-400",
      border: "border-blue-400/25",
      badge: "bg-blue-400/10 text-blue-300",
      label: "Coming Soon",
    },
  }[server.status];

  return (
    <Card
      variant="glass"
      padding="lg"
      className={`
        group
        relative
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-2
        ${status.border}
      `}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,230,53,0.10),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        {/* Status */}

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className={`h-3 w-3 rounded-full animate-pulse ${status.dot}`}
            />

            <p className="text-xs font-black uppercase tracking-[4px] text-gray-400">
              {status.label}
            </p>
          </div>

          <div
            className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[3px] ${status.badge}`}
          >
            {server.platform}
          </div>
        </div>

        {/* Title */}

        <h3 className="mt-8 text-3xl font-black text-white">
          {server.name}
        </h3>

        <p className="mt-3 text-gray-400">
          {server.subtitle}
        </p>

        <div className="my-8 h-px bg-white/10" />

        {comingSoon ? (
          <>
            <div className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-6">
              <p className="text-xs font-black uppercase tracking-[4px] text-blue-300">
                Deployment Status
              </p>

              <p className="mt-4 text-2xl font-black text-white">
                Infrastructure Preparing
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                This server is currently being configured for launch. Follow
                development updates as we prepare the next deployment within
                the NGS network.
              </p>
            </div>

            <div className="my-8 grid gap-4 sm:grid-cols-3">
              <StatCard
                title="Map"
                value={server.map}
              />

              <StatCard
                title="Version"
                value={server.version}
              />

              <StatCard
                title="Platform"
                value={server.platform}
              />
            </div>

            <Button
              fullWidth
            >
              Learn More
            </Button>
          </>
        ) : (
          <>
            {/* Player Count */}

            <div className="flex items-end justify-between">
              <div>
                <p className="text-5xl font-black leading-none text-white">
                  {server.players}
                </p>

                <p className="mt-2 text-xs font-black uppercase tracking-[4px] text-lime-400">
                  Survivors Online
                </p>
              </div>

              <div className="text-right">
                <p className="text-3xl font-black text-white">
                  {percentage}%
                </p>

                <p className="text-sm text-gray-400">
                  Capacity
                </p>
              </div>
            </div>

            {/* Progress */}

            <div className="mt-8">
              <div className="flex justify-between text-sm text-gray-400">
                <span>
                  Population
                </span>

                <span>
                  {server.players} / {server.maxPlayers}
                </span>
              </div>

              <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${
                    online
                      ? "bg-lime-400"
                      : restarting
                      ? "bg-yellow-400"
                      : "bg-red-500"
                  }`}
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>
            </div>

            <div className="my-8 h-px bg-white/10" />

            {/* Information */}

            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard
                label="Queue"
                value={server.queue}
              />

              <InfoCard
                label="Restart"
                value={server.restart}
              />

              <InfoCard
                label="Map"
                value={server.map}
              />

              <InfoCard
                label="Version"
                value={server.version}
              />
            </div>

            {/* Direct Connect */}

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6">
  <p className="text-xs font-black uppercase tracking-[4px] text-lime-400">
    Direct Connect
  </p>

  <p className="mt-4 break-all font-mono text-lg text-white">
    {server.ip}:{server.port}
  </p>
</div>

            {/* Actions */}

            <div className="mt-8 grid grid-cols-2 gap-4">
              <ClipboardButton
  text={`${server.ip}:${server.port}`}
  className="
    w-full
    border
    border-white/10
    bg-white/5
    px-6
    py-3
    text-sm
    font-black
    uppercase
    tracking-[3px]
    text-white
    hover:border-lime-400/40
    hover:bg-lime-400/10
    hover:text-lime-400
  "
/>

              <Button>
                {offline
                  ? "Server Offline"
                  : "Join Server"}
              </Button>
            </div>
          </>
        )}
      </div>
    </Card>
  );
}

interface InfoCardProps {
  label: string;
  value: React.ReactNode;
}

function InfoCard({
  label,
  value,
}: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-[11px] font-black uppercase tracking-[3px] text-gray-500">
        {label}
      </p>

      <p className="mt-2 text-lg font-bold text-white">
        {value}
      </p>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: React.ReactNode;
}

function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-center">
      <p className="text-[11px] font-black uppercase tracking-[3px] text-gray-500">
        {title}
      </p>

      <p className="mt-3 text-xl font-bold text-white">
        {value}
      </p>
    </div>
  );
}