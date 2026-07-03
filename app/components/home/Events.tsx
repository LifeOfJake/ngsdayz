import Link from "next/link";

import { events } from "../data/events";

import Button from "../ui/Button";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import Badge from "../ui/Badge";

export default function Events() {
  return (
    <Section>

      <Container>

        <Heading
          eyebrow="Featured Events"
          title={
            <>
              Every Week Brings
              <br />
              <span className="text-lime-400">
                A New Challenge
              </span>
            </>
          }
          description={
            <>
              Whether you're hunting valuable loot, fighting over military
              convoys or defending your position at King of the Hill,
              there's always something happening on NGS.
            </>
          }
        />

        <div className="mt-20 space-y-8">

          {events.map((event) => (

            <Card
              key={event.id}
              variant="default"
              padding="md"
            >

              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                <div className="flex gap-6">

                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-lime-400/10 text-4xl">
                    {event.icon}
                  </div>

                  <div>

                    <Badge>
                      {event.category}
                    </Badge>

                    <h3 className="mt-5 text-3xl font-black text-white">
                      {event.title}
                    </h3>

                    <p className="mt-4 max-w-2xl leading-8 text-gray-400">
                      {event.description}
                    </p>

                  </div>

                </div>

                <div className="text-left lg:text-right">

                  <p className="text-lg font-bold text-white">
                    {event.day}
                  </p>

                  <p className="mt-2 text-gray-400">
                    {event.time}
                  </p>

                  <Link href={`/events/${event.id}`}>
                  <Button
                    variant="ghost"
                    size="inline"
                    className="mt-6"
                 >
                    Learn More →
                 </Button>
                 
               </Link>

                </div>

              </div>

            </Card>

          ))}

        </div>

        <div className="mt-16 text-center">

          <Button variant="secondary">
            View All Events
          </Button>

        </div>

      </Container>

    </Section>
  );
}