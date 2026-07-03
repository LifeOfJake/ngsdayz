import {
  Card,
  Container,
  Grid,
  Heading,
  Section,
} from "../ui";

const features = [
  {
    number: "01",
    title: "Balanced PvP",
    description:
      "A carefully balanced PvP environment with active moderation, fair gameplay and competitive combat.",
  },
  {
    number: "02",
    title: "Custom Content",
    description:
      "Quality-of-life improvements, unique systems and carefully selected mods that enhance the survival experience.",
  },
  {
    number: "03",
    title: "Community Events",
    description:
      "Weekly PvP tournaments, convoy missions, treasure hunts and seasonal events for every type of player.",
  },
  {
    number: "04",
    title: "Massive Community",
    description:
      "Join over 136,000 survivors on Discord and become part of one of the UK's largest DayZ communities.",
  },
];

export default function Features() {
  return (
    <Section>

      <Container>

        <Heading
          align="left"
          eyebrow="Why Choose NGS"
          title={
            <>
              Built By Players.
              <br />
              Designed For Survivors.
            </>
          }
        />

        <Grid
          columns={2}
          className="mt-20"
        >

          {features.map((feature) => (

            <Card
              key={feature.number}
              padding="lg"
              className="
                group
                bg-white/[0.03]
                hover:bg-white/[0.05]
              "
            >

              <p className="text-6xl font-black text-lime-400/25 transition-colors duration-300 group-hover:text-lime-400">

                {feature.number}

              </p>

              <h3 className="mt-6 text-3xl font-bold text-white">

                {feature.title}

              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-400">

                {feature.description}

              </p>

            </Card>

          ))}

        </Grid>

      </Container>

    </Section>
  );
}