import Image from "next/image";
import Link from "next/link";

import { community } from "../../../data/community";

import {
  Button,
  Container,
} from "../../../components/ui";

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

      <div className="relative z-10 flex min-h-screen items-center pt-24">

        <Container>

          <div className="mx-auto max-w-4xl text-center">

            <p className="mb-6 text-sm font-black uppercase tracking-[10px] text-lime-400">
              Welcome To
            </p>

            <h1 className="leading-none">

              <span className="block text-6xl font-black uppercase text-white md:text-7xl xl:text-8xl">
                Next Generation
              </span>

              <span className="block text-6xl font-black uppercase text-lime-400 md:text-7xl xl:text-8xl">
                Survival
              </span>

            </h1>

            <h2 className="mt-6 text-3xl font-bold text-white">
              Official DayZ Community
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Experience hardcore survival with balanced PvP,
              immersive custom events, active staff and one of the
              UK's fastest growing DayZ communities.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-5 sm:flex-row">

              <Link href={community.playNow}>
                <Button size="lg">
                  ▶ Play Now
                </Button>
              </Link>

              <Link
                href={community.discord}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="secondary"
                  size="lg"
                >
                  Join Discord
                </Button>
              </Link>

            </div>

          </div>

        </Container>

      </div>

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#070707] to-transparent" />

    </section>
  );
}