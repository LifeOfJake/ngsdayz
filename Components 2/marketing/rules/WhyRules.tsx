import Image from "next/image";

import {
  Card,
  Container,
  Heading,
  Section,
} from "../../../components/ui";

export default function WhyRules() {
  return (
    <Section>

      <Container>

        <Heading
          eyebrow="Survival With Purpose"
          title={
            <>
              Why We
              <br />
              Have Rules
            </>
          }
          description={
            <>
              Rules don't exist to restrict how you play. They exist to
              protect the survival experience that makes every encounter
              meaningful.
              <br />
              <br />
              Every victory should feel earned.
              <br />
              Every defeat should teach a lesson.
              <br />
              Every story should be your own.
            </>
          }
        />

        {/* Cinematic Banner */}

        <div className="group relative mt-20 overflow-hidden rounded-[36px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,.45)]">

          <Image
            src="/rules-checkpoint.png"
            alt="NGS Checkpoint"
            width={1600}
            height={900}
            className="h-[340px] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />

          <div className="absolute bottom-10 left-8">

            <p className="text-xs font-black uppercase tracking-[6px] text-lime-400">
              NGS CHECKPOINT
            </p>

            <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-white md:text-3xl">
              Every Journey Begins
              <br />
              With A Choice
            </h3>

          </div>

        </div>

        {/* Philosophy */}

        <div className="mx-auto mt-20 max-w-4xl">

          <Card
            variant="flat"
            padding="lg"
            className="border-lime-400/20 bg-gradient-to-br from-lime-400/10 via-[#111111] to-[#090909] text-center backdrop-blur-xl"
          >

            <p className="text-sm font-black uppercase tracking-[8px] text-lime-400">
              NGS Philosophy
            </p>

            <p className="mt-8 text-2xl font-bold italic leading-relaxed text-white md:text-3xl">
              "The greatest DayZ stories aren't written by developers."
            </p>

            <p className="mt-6 text-2xl font-black italic leading-relaxed text-lime-400 md:text-3xl">
              They're written by the survivors who choose to play fair.
            </p>

          </Card>

        </div>

      </Container>

    </Section>
  );
}