import { Event } from "../../../data/events/events";

import {
  Card,
  Container,
  Section,
} from "../ui";

interface EventObjectivesProps {
  event: Event;
}

export default function EventObjectives({
  event,
}: EventObjectivesProps) {
  return (
    <Section background="secondary">

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-black uppercase tracking-[8px] text-lime-400">

            Mission Objectives

          </p>

          <h2 className="mt-6 text-5xl font-black uppercase text-white md:text-6xl">

            Your Assignment

          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-300">

            Every successful operation starts with a clear objective.
            Complete each task to maximise your chances of extracting
            valuable rewards.

          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {event.objectives.map((objective, index) => (

            <Card
              key={objective}
              variant="default"
              padding="md"
            >

              <div className="flex items-start gap-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-lime-400/30 bg-lime-400/10 text-lg font-black text-lime-400">

                  {index + 1}

                </div>

                <div>

                  <h3 className="text-xl font-black uppercase text-white">

                    Objective {index + 1}

                  </h3>

                  <p className="mt-4 leading-8 text-gray-300">

                    {objective}

                  </p>

                </div>

              </div>

            </Card>

          ))}

        </div>

      </Container>

    </Section>
  );
}