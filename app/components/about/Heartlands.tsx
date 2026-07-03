import Image from "next/image";

import {
  Card,
  Container,
  Heading,
  Section,
} from "../ui";

export default function Heartlands() {
  return (
    <Section>

      <Container>

        <Heading
          eyebrow="The Heartlands"
          title={
            <>
              A World Shaped
              <br />
              By Survivors
            </>
          }
        />

        <div className="group relative mt-20 overflow-hidden rounded-[36px] border border-white/10">

          <Image
            src="/heartlands.jpg"
            alt="The Heartlands"
            width={1600}
            height={900}
            className="h-[700px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/20" />

          {/* Quote */}

          <div className="absolute bottom-10 left-1/2 w-full max-w-4xl -translate-x-1/2 px-8">

            <Card
              variant="flat"
              padding="lg"
              className="border-lime-400/20 bg-black/55 text-center backdrop-blur-xl"
            >

              <p className="text-sm font-black uppercase tracking-[6px] text-lime-400">

                Every Story Begins Somewhere

              </p>

              <h3 className="mt-5 text-3xl font-black uppercase text-white md:text-4xl">

                Every Encounter
                <br />
                Can Change Your Story.

              </h3>

            </Card>

          </div>

        </div>

      </Container>

    </Section>
  );
}