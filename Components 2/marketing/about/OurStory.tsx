import {
  Card,
  Container,
  Heading,
  Section,
} from "../../../components/ui";

export default function OurStory() {
  return (
    <Section>

      <Container>

        <Heading
          eyebrow="Our Journey"
          title={
            <>
              Building More Than
              <br />
              Just Another Server
            </>
          }
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-2">

          {/* Left */}

          <div className="space-y-8 text-lg leading-9 text-gray-300">

            <p>

              NGS wasn't created simply to launch another DayZ server.

              It was created with a vision of building a community where
              survival feels meaningful, every encounter tells a story and
              every player has the opportunity to create unforgettable moments.

            </p>

            <p>

              We believe the greatest DayZ experiences can't be scripted.

              They're found in the unexpected friendships, tense stand-offs,
              dangerous journeys and split-second decisions that make every
              session unique.

            </p>

          </div>

          {/* Right */}

          <div className="space-y-8 text-lg leading-9 text-gray-300">

            <p>

              Every decision we make, from balancing gameplay to developing
              new features, is guided by one principle:

            </p>

            <Card
              variant="flat"
              padding="lg"
              className="border-lime-400/20 bg-lime-400/5"
            >

              <p className="text-2xl font-black leading-relaxed text-white">

                "Create a world where every survivor leaves with a story worth telling."

              </p>

            </Card>

            <p>

              That's the vision that continues to guide NGS today,
              and it's the standard we'll continue to build towards
              in the future.

            </p>

          </div>

        </div>

      </Container>

    </Section>
  );
}