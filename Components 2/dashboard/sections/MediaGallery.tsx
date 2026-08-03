import Image from "next/image";

import { Event } from "../../../data/events/events";

import {
  Card,
  Container,
  Section,
} from "../ui";

interface EventGalleryProps {
  event: Event;
}

export default function EventGallery({
  event,
}: EventGalleryProps) {
  return (
    <Section background="secondary">

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-black uppercase tracking-[8px] text-lime-400">

            Gallery

          </p>

          <h2 className="mt-6 text-5xl font-black uppercase text-white md:text-6xl">

            Operation Intelligence

          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-300">

            Preview the battlefield before deployment.
            Every operation takes place in unique environments
            with different challenges and opportunities.

          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {event.gallery.map((image, index) => (

            <Card
              key={image}
              variant="default"
              padding="none"
              className="group"
            >

              <div className="relative aspect-[16/10] overflow-hidden">

                <Image
                  src={image}
                  alt={`${event.title} ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              </div>

            </Card>

          ))}

        </div>

      </Container>

    </Section>
  );
}