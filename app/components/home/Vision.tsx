import {
  Card,
  Container,
  Section,
} from "../ui";

const principles = [
  {
    title: "⚔️ Purposeful PvP",
    description:
      "Military zones and redesigned airfields create rewarding fights instead of random encounters.",
  },
  {
    title: "🏗️ Creative Base Building",
    description:
      "Expanded building systems allow players to create unique compounds worth defending.",
  },
  {
    title: "💰 A Living Economy",
    description:
      "Trading should support survival, not replace it.",
  },
  {
    title: "🌍 Community First",
    description:
      "Every decision is guided by one simple question: does it make DayZ more enjoyable?",
  },
];

export default function Vision() {
  return (
    <Section>

      <Container>

        <div className="grid gap-20 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Left */}

          <div>

            <p className="text-sm font-black uppercase tracking-[8px] text-lime-400">
              Why We Built NGS
            </p>

            <h2 className="mt-6 text-5xl font-black uppercase leading-tight text-white md:text-6xl">
              Built From Experience.
              <br />
              Designed For Survival.
            </h2>

            <div className="mt-10 space-y-8 text-lg leading-9 text-gray-300">

              <p>
                Next Generation Survival wasn't created overnight.
              </p>

              <p>
                It has been shaped by thousands of hours spent surviving,
                building, fighting and administrating across the DayZ
                community.
              </p>

              <p>
                During that journey one thing became clear...
                every server did something brilliantly, but none brought
                together every aspect of the game into one complete
                experience.
              </p>

              <p>
                We wanted a world where PvP, PvE, trading, exploration
                and base building all felt equally important.
              </p>

              <p>
                NGS isn't trying to reinvent DayZ.
              </p>

            </div>

            <p className="mt-6 text-xl font-bold text-lime-400">
              We're bringing together everything we've loved about the
              game into one server.
            </p>

          </div>

          {/* Right */}

          <Card
            variant="flat"
            padding="lg"
            className="border-lime-400/20 bg-lime-400/5"
          >

            <p className="text-sm font-black uppercase tracking-[6px] text-lime-400">
              Our Principles
            </p>

            <div className="mt-10 space-y-8">

              {principles.map((principle) => (

                <div key={principle.title}>

                  <h3 className="text-2xl font-bold text-white">
                    {principle.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    {principle.description}
                  </p>

                </div>

              ))}

            </div>

          </Card>

        </div>

      </Container>

    </Section>
  );
}