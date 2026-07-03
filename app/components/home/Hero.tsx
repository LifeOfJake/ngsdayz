import Image from "next/image";
import Link from "next/link";

import { community } from "../data/community";
import { server } from "../data/server";

import {
  Button,
  Card,
  Container,
  Divider,
} from "../ui";

const serverInfo = [
  {
    label: "Status",
    value: "🟢 Online",
    highlight: true,
  },
  {
    label: "Players",
    value: `${47} / ${server.maxPlayers}`,
  },
  {
    label: "Queue",
    value: "0",
  },
  {
    label: "Map",
    value: server.map,
  },
  {
    label: "Restart",
    value: "02:53:41",
  },
  {
    label: "Discord",
    value: server.discordMembers,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      <Image
        src="/hero.png"
        alt="NGS Hero"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 flex min-h-screen items-center pt-32">

        <Container>

          <div className="grid items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">

            {/* Left */}

            <div>

              <p className="mb-6 text-sm font-black uppercase tracking-[10px] text-lime-400">
                Welcome To
              </p>

              <h1 className="leading-none">

                <span className="block text-6xl font-black uppercase text-white xl:text-8xl">
                  Next Generation
                </span>

                <span className="block text-6xl font-black uppercase text-lime-400 xl:text-8xl">
                  Survival
                </span>

              </h1>

              <h2 className="mt-8 text-3xl font-bold">
                Official DayZ Community
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Experience hardcore survival with balanced PvP,
                custom events, active staff and one of the UK's
                fastest growing DayZ communities.
              </p>

              <div className="mt-12 flex flex-col gap-5 sm:flex-row">

                <Link href={community.playNow}>
                  <Button>
                    Play Now
                  </Button>
                </Link>

                <Link
                  href={community.discord}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="secondary">
                    Join Discord
                  </Button>
                </Link>

              </div>

            </div>

            {/* Right */}

            <Card
              variant="glass"
              padding="lg"
            >

              <h3 className="mb-8 text-sm font-black uppercase tracking-[6px] text-lime-400">
                Live Server
              </h3>

              <div>

                {serverInfo.map((item, index) => (

                  <div key={item.label}>

                    <div className="flex items-center justify-between py-3">

                      <span className="text-gray-400">
                        {item.label}
                      </span>

                      <span
                        className={`font-bold ${
                          item.highlight
                            ? "text-lime-400"
                            : "text-white"
                        }`}
                      >
                        {item.value}
                      </span>

                    </div>

                    {index !== serverInfo.length - 1 && (
                      <Divider spacing="sm" />
                    )}

                  </div>

                ))}

              </div>

              <Link href={community.playNow}>
                <Button
                  className="mt-10"
                  fullWidth
                  size="lg"
                >
                  Join Server →
                </Button>
              </Link>

            </Card>

          </div>

        </Container>

      </div>

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#070707] to-transparent" />

    </section>
  );
}