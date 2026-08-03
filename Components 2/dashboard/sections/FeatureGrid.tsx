import { Event } from "../../../data/events/events";

import {
  Card,
  Container,
  Section,
} from "../ui";

interface EventRewardsProps {
  event: Event;
}

export default function EventRewards({
  event,
}: EventRewardsProps) {
  return (
    <Section>

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-black uppercase tracking-[8px] text-lime-400">

            Rewards

          </p>

          <h2 className="mt-6 text-5xl font-black uppercase text-white md:text-6xl">

            Worth Fighting For

          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-300">

            Completing the operation grants access to valuable rewards.
            The greater the risk, the greater the potential payoff.

          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {event.rewards.map((reward) => (

            <Card
              key={reward}
              variant="default"
              padding="lg"
              className="text-center"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-lime-400/30 bg-lime-400/10 text-3xl">

                🎁

              </div>

              <h3 className="mt-8 text-2xl font-black uppercase text-white">

                {reward}

              </h3>

            </Card>

          ))}

        </div>

      </Container>

    </Section>
  );
}