import Image from "next/image";

import { events } from "../data/events";

import Button from "../ui/Button";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";

export default function EventsHero() {
  const featuredEvent = events.find((event) => event.featured)!;

  return (
    <Section className="relative min-h-screen overflow-hidden py-0">

      {/* Background */}

      <Image
        src="/events-hero.png"
        alt="NGS Events"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}

      <Container className="relative z-10 flex min-h-screen items-center pt-32">

        <div className="grid w-full items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Left */}

          <div>

            <p className="mb-6 text-sm font-black uppercase tracking-[10px] text-lime-400">
              Operations Await
            </p>

            <h1 className="leading-none">

              <span className="block text-6xl font-black uppercase text-white xl:text-8xl">
                Every Event
              </span>

              <span className="block text-6xl font-black uppercase text-lime-400 xl:text-8xl">
                Creates A Story
              </span>

            </h1>

            <h2 className="mt-8 text-3xl font-bold text-white">
              The next adventure is only one deployment away.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">

              Convoys, King of the Hill, toxic expeditions,
              treasure hunts and community operations.

              Every event has been designed to create memorable
              moments across the Heartlands.

            </p>

            <div className="mt-12 flex flex-col gap-5 sm:flex-row">

              <Button>
                View Schedule
              </Button>

              <Button variant="secondary">
                Join Discord
              </Button>

            </div>

          </div>

          {/* Right */}

          <Card
            variant="glass"
            padding="lg"
            className="bg-black/45"
          >

            <p className="mb-8 text-sm font-black uppercase tracking-[6px] text-lime-400">
              Next Operation
            </p>

            <div className="space-y-5">

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Event</span>
                <span className="font-bold text-white">
                  {featuredEvent.title}
                </span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Schedule</span>
                <span className="font-bold text-white">
                  {featuredEvent.day}
                </span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Time</span>
                <span className="font-bold text-white">
                  {featuredEvent.time}
                </span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Location</span>
                <span className="font-bold text-white">
                  {featuredEvent.location}
                </span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Difficulty</span>
                <span className="font-bold text-red-400">
                  {featuredEvent.difficulty}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Status</span>
                <span className="font-bold text-lime-400">
                  {featuredEvent.status}
                </span>
              </div>

            </div>

            <Button
              fullWidth
              className="mt-10"
            >
              Join Operation →
            </Button>

          </Card>

        </div>

      </Container>

      {/* Scroll Indicator */}

      <div className="absolute bottom-14 left-1/2 z-20 -translate-x-1/2 animate-bounce">

        <div className="flex flex-col items-center">

          <span className="text-3xl text-gray-300">
            ↓
          </span>

          <p className="mt-2 text-xs font-black uppercase tracking-[5px] text-gray-400">
            Upcoming Operations
          </p>

        </div>

      </div>

      {/* Fade */}

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#070707] to-transparent" />

    </Section>
  );
}