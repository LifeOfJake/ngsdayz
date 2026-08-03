import Link from "next/link";

import { community } from "../../data/community";
import { navigation } from "../../data/navigation";
import { servers } from "../../data/servers/servers";

const server = servers[0];

import {
  Container,
  Divider,
} from "../../components/ui";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">

      <Container>

        <div className="py-20">

          <div className="grid gap-14 md:grid-cols-4">

            {/* Brand */}

            <div>

              <h2 className="text-4xl font-black tracking-[0.18em] text-lime-400">

                {server.name}

              </h2>

              <p className="mt-6 leading-8 text-gray-400">

                Built from years of DayZ experience.

                <br />

                Designed to create unforgettable stories.

              </p>

            </div>

            {/* Navigation */}

            <div>

              <h3 className="font-bold uppercase tracking-[0.2em] text-white">

                Navigate

              </h3>

              <ul className="mt-6 space-y-4">

                {navigation.map((item) => (

                  <li key={item.label}>

                    <Link
                      href={item.href}
                      className="text-gray-400 transition-colors duration-300 hover:text-lime-400"
                    >
                      {item.label}
                    </Link>

                  </li>

                ))}

              </ul>

            </div>

            {/* Community */}

            <div>

              <h3 className="font-bold uppercase tracking-[0.2em] text-white">

                Community

              </h3>

              <ul className="mt-6 space-y-4">

                <li>

                  <Link
                    href={community.discord}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 transition-colors duration-300 hover:text-lime-400"
                  >
                    Discord
                  </Link>

                </li>

                <li>

                  <Link
                    href="#"
                    className="text-gray-400 transition-colors duration-300 hover:text-lime-400"
                  >
                    Steam Collection
                  </Link>

                </li>

                <li>

                  <Link
                    href="#"
                    className="text-gray-400 transition-colors duration-300 hover:text-lime-400"
                  >
                    Support
                  </Link>

                </li>

              </ul>

            </div>

            {/* Server */}

            <div>

              <h3 className="font-bold uppercase tracking-[0.2em] text-white">

                Server

              </h3>

              <ul className="mt-6 space-y-4 text-gray-400">

                <li>{server.map}</li>

                <li>{server.platform}</li>

                <li>Version {server.version}</li>

              </ul>

            </div>

          </div>

          <Divider spacing="lg" />

          <div className="flex flex-col items-center justify-between gap-6 text-sm text-gray-500 md:flex-row">

            <p>

              © 2026 {server.name}. All rights reserved.

            </p>

            <p className="uppercase tracking-[0.2em] text-gray-600">

              Atlas UI v1.0

            </p>

          </div>

        </div>

      </Container>

    </footer>
  );
}