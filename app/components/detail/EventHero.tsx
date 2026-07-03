import Image from "next/image";

import { Event } from "../data/events";

import {
  Badge,
  Container,
} from "../ui";

interface EventHeroProps {
  event: Event;
}

export default function EventHero({
  event,
}: EventHeroProps) {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}

      <Image
        src={event.image}
        alt={event.title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      {/* Hero */}

      <Container className="relative z-10 flex min-h-screen items-center pt-40 pb-24">

        <div className="max-w-5xl">

          <Badge>

            {event.category}

          </Badge>

          <h1 className="mt-8 text-6xl font-black uppercase leading-none text-white xl:text-8xl">

            {event.title}

          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-300">

            {event.description}

          </p>

          {/* Quick Facts */}

          <div className="mt-14 flex flex-wrap gap-4">

            <Badge variant="white">

              📅 {event.day}

            </Badge>

            <Badge variant="white">

              🕒 {event.time}

            </Badge>

            <Badge variant="white">

              📍 {event.location}

            </Badge>

            <Badge variant="white">

              👥 {event.recommendedPlayers}

            </Badge>

            <Badge variant="danger">

              {event.difficulty}

            </Badge>

          </div>

        </div>

      </Container>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#070707] to-transparent" />

    </section>
  );
}