import Image from "next/image";

import {
  Button,
  Card,
  Container,
} from "../../../components/ui";

import { Section } from "../../../components/marketing";

export default function FeaturedOperation() {
  return (
    <Section>

      <Container>

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-black uppercase tracking-[8px] text-lime-400">
            Featured Operation
          </p>

          <h2 className="mt-6 text-5xl font-black uppercase text-white md:text-7xl">
            Operation
            <br />

            <span className="text-lime-400">
              Iron Convoy
            </span>

          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-300">

            A heavily armed military convoy is moving across
            Chernarus carrying high-value equipment.

            Intercept it.

            Defend it.

            Or risk everything trying.

          </p>

        </div>

        {/* Operation */}

        <div className="mt-20 grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">

          {/* Image */}

          <div className="group relative overflow-hidden rounded-[36px] border border-white/10">

            <Image
              src="/operation-iron-convoy.png"
              alt="Operation Iron Convoy"
              width={1600}
              height={900}
              className="h-[650px] w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

            <div className="absolute bottom-10 left-10">

              <p className="text-xs font-black uppercase tracking-[6px] text-lime-400">
                HIGH VALUE TARGET
              </p>

              <h3 className="mt-4 text-4xl font-black uppercase text-white">
                Secure The Convoy
              </h3>

            </div>

          </div>

          {/* Mission Brief */}

          <Card
            variant="glass"
            padding="lg"
            className="flex flex-col"
          >

            <p className="text-sm font-black uppercase tracking-[6px] text-lime-400">
              Mission Brief
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Duration</span>
                <span className="font-bold text-white">
                  90 Minutes
                </span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Difficulty</span>
                <span className="font-bold text-red-400">
                  ★★★★★
                </span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Recommended</span>
                <span className="font-bold text-white">
                  Squad
                </span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Reward</span>
                <span className="font-bold text-lime-400">
                  Military Loot
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Status</span>
                <span className="font-bold text-lime-400">
                  Active
                </span>
              </div>

            </div>

            <p className="mt-10 flex-1 leading-8 text-gray-300">

              Expect hostile survivors, unpredictable
              engagements and valuable rewards for those
              willing to fight for control.

            </p>

            <Button
              fullWidth
              className="mt-10"
            >
              Join The Operation
            </Button>

          </Card>

        </div>

      </Container>

    </Section>
  );
}