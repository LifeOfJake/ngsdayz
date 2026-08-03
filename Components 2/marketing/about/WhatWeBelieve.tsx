import {
  Card,
  Container,
  Grid,
  Heading,
  Section,
} from "../../../components/ui";

const beliefs = [
  {
    title: "Every Decision",
    description:
      "Every choice should carry weight. Whether you're crossing the map, defending your base or deciding whether to trust another survivor, every action should have meaningful consequences.",
  },
  {
    title: "Every Encounter",
    description:
      "The greatest DayZ moments can't be scripted. They're created naturally through cooperation, conflict, betrayal and the unexpected friendships formed along the way.",
  },
  {
    title: "Every Story",
    description:
      "Long after the loot has been lost and the gunfights are forgotten, it's the stories you leave with that define your journey through the Heartlands.",
  },
];

export default function WhatWeBelieve() {
  return (
    <Section background="secondary">

      <Container>

        <Heading
          eyebrow="What We Believe"
          title={
            <>
              Every Story Is Built
              <br />
              One Decision At A Time.
            </>
          }
        />

        <Grid
          columns={3}
          className="mt-20"
        >

          {beliefs.map((belief) => (

            <Card
              key={belief.title}
              variant="default"
              padding="lg"
              className="bg-black/40 backdrop-blur"
            >

              <h3 className="text-3xl font-black uppercase text-white">

                {belief.title}

              </h3>

              <p className="mt-6 leading-8 text-gray-300">

                {belief.description}

              </p>

            </Card>

          ))}

        </Grid>

      </Container>

    </Section>
  );
}