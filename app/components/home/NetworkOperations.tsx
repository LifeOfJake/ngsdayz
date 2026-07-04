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

  const totalQueue = servers.reduce(
    (total, server) => total + server.queue,
    0
  );

  const onlineServers = servers.filter(
    (server) => server.status === "Online"
  ).length;

  return (
    <Section background="secondary">

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-black uppercase tracking-[8px] text-lime-400">
            Network Operations
          </p>

          <h2 className="mt-6 text-5xl font-black uppercase text-white md:text-6xl">

            Monitor The
            <br />

            NGS Network

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">

            Live server information,
            deployment status and connection
            details across the Next Generation
            Survival network.

          </p>

        </div>

        {/* Summary */}

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <SummaryCard
            title="Servers"
            value={servers.length}
          />

          <SummaryCard
            title="Survivors"
            value={totalPlayers}
          />

          <SummaryCard
            title="Operational"
            value={onlineServers}
          />

        </div>

        {/* Server Grid */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

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
  title: string;
  value: number;
}

function SummaryCard({
  title,
  value,
}: SummaryCardProps) {
  return (
    <Card
      variant="glass"
      padding="md"
      className="text-center"
    >

      <p className="text-sm font-black uppercase tracking-[5px] text-lime-400">

        {title}

      </p>

      <p className="mt-4 text-5xl font-black text-white">

        {value}

      </p>

    </Card>
  );
}