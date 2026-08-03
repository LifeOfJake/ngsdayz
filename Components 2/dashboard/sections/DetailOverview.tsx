import { Event } from "../../../data/events/events";

import {
  Card,
  Container,
  Divider,
  Section,
} from "../ui";

interface EventOverviewProps {
  event: Event;
}

export default function EventOverview({
  event,
}: EventOverviewProps) {
  return (
    <Section>

      <Container>

        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">

          {/* Mission Overview */}

          <div>

            <p className="text-sm font-black uppercase tracking-[6px] text-lime-400">

              Mission Overview

            </p>

            <h2 className="mt-6 text-5xl font-black uppercase text-white">

              Operation Brief

            </h2>

            <Divider />

            <p className="text-lg leading-9 text-gray-300">

              {event.content}

            </p>

          </div>

          {/* Quick Facts */}

          <Card
            variant="glass"
            padding="lg"
          >

            <p className="text-sm font-black uppercase tracking-[6px] text-lime-400">

              Quick Facts

            </p>

            <div className="mt-8 space-y-5">

              <div className="flex justify-between">

                <span className="text-gray-400">
                  Day
                </span>

                <span className="font-bold text-white">
                  {event.day}
                </span>

              </div>

              <Divider spacing="sm" />

              <div className="flex justify-between">

                <span className="text-gray-400">
                  Time
                </span>

                <span className="font-bold text-white">
                  {event.time}
                </span>

              </div>

              <Divider spacing="sm" />

              <div className="flex justify-between">

                <span className="text-gray-400">
                  Duration
                </span>

                <span className="font-bold text-white">
                  {event.duration}
                </span>

              </div>

              <Divider spacing="sm" />

              <div className="flex justify-between">

                <span className="text-gray-400">
                  Location
                </span>

                <span className="font-bold text-white">
                  {event.location}
                </span>

              </div>

              <Divider spacing="sm" />

              <div className="flex justify-between">

                <span className="text-gray-400">
                  Squad Size
                </span>

                <span className="font-bold text-white">
                  {event.recommendedPlayers}
                </span>

              </div>

              <Divider spacing="sm" />

              <div className="flex justify-between">

                <span className="text-gray-400">
                  Difficulty
                </span>

                <span className="font-bold text-red-400">
                  {event.difficulty}
                </span>

              </div>

              <Divider spacing="sm" />

              <div className="flex justify-between">

                <span className="text-gray-400">
                  Status
                </span>

                <span className="font-bold text-lime-400">
                  {event.status}
                </span>

              </div>

            </div>

          </Card>

        </div>

      </Container>

    </Section>
  );
}