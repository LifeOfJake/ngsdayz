import { Event } from "../../../data/events/events";

import {
  Card,
  Container,
  Section,
} from "../ui";

interface EventIntelligenceProps {
  event: Event;
}

export default function EventIntelligence({
  event,
}: EventIntelligenceProps) {
  return (
    <Section>

      <Container>

        <Card
          variant="glass"
          padding="lg"
          className="border-lime-400/20"
        >

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm font-black uppercase tracking-[8px] text-lime-400">

              Command Intelligence

            </p>

            <h2 className="mt-6 text-5xl font-black uppercase text-white md:text-6xl">

              Tactical Recommendations

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">

              Intelligence gathered from previous operations.
              Use these recommendations to maximise your chances
              of surviving the mission.

            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {event.tips.map((tip, index) => (

              <div
                key={tip}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-lime-400/30 hover:bg-white/[0.05]"
              >

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime-400 text-lg font-black text-black">

                  {index + 1}

                </div>

                <p className="leading-8 text-gray-300">

                  {tip}

                </p>

              </div>

            ))}

          </div>

        </Card>

      </Container>

    </Section>
  );
}