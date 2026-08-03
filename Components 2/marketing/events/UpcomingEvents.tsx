import Link from "next/link";

import { events } from "../../../data/events/events"
import { Section } from "../../../components/marketing";
import { Card } from "../../primitives/surfaces/Card";

import Button from "../../primitives/forms/Button";
import Container from "../../primitives/layout/Container";
import Heading from "../../primitives/display/Heading";


export default function UpcomingEvents() {
  return (
    <Section background="secondary">

      <Container>

        <Heading
          eyebrow="Upcoming Events"
          title={
            <>
              What's Happening
              <br />
              <span className="text-lime-400">
                This Week
              </span>
            </>
          }
          description="Plan your next adventure with our upcoming community events and weekly operations."
        />

        <div className="mt-20 space-y-6">

          {events.map((event) => (

            <Card
              key={event.id}
              variant="default"
              padding="md"
            >

              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <p className="text-sm font-black uppercase tracking-[5px] text-lime-400">
                    {event.day}
                  </p>

                  <h3 className="mt-3 text-3xl font-black uppercase text-white">
                    {event.title}
                  </h3>

                  <p className="mt-4 text-gray-400">
                    {event.category}
                  </p>

                </div>

                <div className="text-left lg:text-right">

                  <p className="text-xl font-bold text-white">
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

      </Container>

    </Section>
  );
}