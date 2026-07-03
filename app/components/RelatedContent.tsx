import Link from "next/link";

import { Event, events } from "./data/events";

import {
  Button,
  Card,
  Container,
  Section,
} from "./ui";

interface RelatedEventsProps {
  event: Event;
}

export default function RelatedEvents({
  event,
}: RelatedEventsProps) {
  const relatedEvents = events.filter(
    (item) => item.id !== event.id
  );

  return (
    <Section background="secondary">

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-black uppercase tracking-[8px] text-lime-400">

            Continue Your Journey

          </p>

          <h2 className="mt-6 text-5xl font-black uppercase text-white md:text-6xl">

            Related Operations

          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-300">

            Every deployment offers a different challenge.
            Explore more operations and prepare for your next mission.

          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {relatedEvents.map((relatedEvent) => (

            <Card
              key={relatedEvent.id}
              variant="default"
              padding="lg"
              className="flex flex-col"
            >

              <div className="text-5xl">

                {relatedEvent.icon}

              </div>

              <p className="mt-8 text-sm font-black uppercase tracking-[4px] text-lime-400">

                {relatedEvent.category}

              </p>

              <h3 className="mt-4 text-3xl font-black uppercase text-white">

                {relatedEvent.title}

              </h3>

              <p className="mt-6 flex-1 leading-8 text-gray-300">

                {relatedEvent.description}

              </p>

              <Link
                href={`/events/${relatedEvent.id}`}
                className="mt-10"
              >

                <Button
                  variant="ghost"
                  size="inline"
                >
                  View Operation →
                </Button>

              </Link>

            </Card>

          ))}

        </div>

      </Container>

    </Section>
  );
}