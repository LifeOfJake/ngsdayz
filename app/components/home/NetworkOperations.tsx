import { servers } from "../data";
import {
  Card,
  Container,
  Section,
} from "../ui";

import ServerCard from "./ServerCard";

export default function NetworkOperations() {
  const totalPlayers = servers.reduce(
    (total, server) => total + server.players,
    0
  );

  const totalCapacity = servers.reduce(
    (total, server) => total + server.maxPlayers,
    0
  );

  const onlineServers = servers.filter(
    (server) => server.status === "Online"
  ).length;

  const restartingServers = servers.filter(
    (server) => server.status === "Restarting"
  ).length;

  const comingSoonServers = servers.filter(
    (server) => server.status === "Coming Soon"
  ).length;

  const networkCapacity =
    totalCapacity === 0
      ? 0
      : Math.round((totalPlayers / totalCapacity) * 100);

  return (
    <Section background="secondary">
      <Container>
        {/* Hero */}

        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-lime-400/20 bg-lime-400/5 px-5 py-2">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-lime-400" />

            <p className="text-xs font-black uppercase tracking-[5px] text-lime-400">
              Live Network Operations
            </p>
          </div>

          <h2 className="mt-8 text-5xl font-black uppercase leading-none text-white md:text-7xl">
            Monitor The
            <br />

            <span className="text-lime-400">
              NGS Network
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
            View live infrastructure across the Next Generation Survival
            network. Monitor deployments, player activity, network capacity
            and upcoming server expansions from one central operations panel.
          </p>
        </div>

        {/* Divider */}

        <div className="relative my-20">
          <div className="h-px bg-white/10" />

          <div className="absolute left-1/2 top-1/2 h-2 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400 shadow-[0_0_30px_rgba(163,230,53,0.8)]" />
        </div>

        {/* Metrics */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <SummaryCard
            value={servers.length}
            title="Deployments"
            subtitle="Across The Network"
          />

          <SummaryCard
            value={totalPlayers}
            title="Survivors"
            subtitle="Currently Online"
          />

          <SummaryCard
            value={`${networkCapacity}%`}
            title="Capacity"
            subtitle={`${totalPlayers} / ${totalCapacity} Slots`}
          />

          <SummaryCard
            value={onlineServers}
            title="Operational"
            subtitle={`${comingSoonServers} Pending • ${restartingServers} Restarting`}
          />
        </div>

        {/* Operations Header */}

        <div className="mt-24 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[6px] text-lime-400">
              Active Deployments
            </p>

            <h3 className="mt-4 text-4xl font-black uppercase text-white">
              Server Infrastructure
            </h3>

            <p className="mt-5 max-w-2xl leading-8 text-gray-400">
              Every deployment is continuously monitored to ensure the highest
              possible uptime, stability and player experience across the NGS
              ecosystem.
            </p>
          </div>

          <Card
            variant="glass"
            padding="md"
            className="border-lime-400/20 lg:max-w-sm"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10">
                <span className="h-3 w-3 animate-pulse rounded-full bg-lime-400" />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[4px] text-gray-400">
                  Network Status
                </p>

                <p className="mt-1 text-2xl font-black text-white">
                  Operational
                </p>
              </div>
            </div>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-lime-400 transition-all duration-1000"
                style={{
                  width: `${networkCapacity}%`,
                }}
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-gray-400">
                Overall Capacity
              </span>

              <span className="font-black text-lime-400">
                {networkCapacity}%
              </span>
            </div>
          </Card>
        </div>

        {/* Server Grid */}

        <div className="mt-16 grid gap-8 xl:grid-cols-2">
          {servers.map((server) => (
            <ServerCard
              key={server.id}
              server={server}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

interface SummaryCardProps {
  value: number | string;
  title: string;
  subtitle: string;
}

function SummaryCard({
  value,
  title,
  subtitle,
}: SummaryCardProps) {
  return (
    <Card
      variant="glass"
      padding="lg"
      className="
        group
        relative
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-lime-400/30
      "
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,230,53,0.12),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <p className="text-xs font-black uppercase tracking-[5px] text-gray-500">
          {title}
        </p>

        <p className="mt-6 text-6xl font-black leading-none text-white transition-colors duration-300 group-hover:text-lime-400">
          {value}
        </p>

        <div className="my-8 h-px bg-white/10 transition-colors duration-300 group-hover:bg-lime-400/40" />

        <p className="text-sm text-gray-400">
          {subtitle}
        </p>
      </div>
    </Card>
  );
}