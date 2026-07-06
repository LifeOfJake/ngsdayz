import {
  Card,
  Container,
  Grid,
  Heading,
  Section,
} from "../ui";

const features = [
  {
    title: "Persistent World",
    description:
      "Every action leaves its mark in a world shaped by its survivors.",
  },
  {
    title: "Meaningful Survival",
    description:
      "Every encounter, resource and decision carries real consequences.",
  },
  {
    title: "Community First",
    description:
      "Built alongside our community and shaped by player feedback.",
  },
  {
    title: "Always Evolving",
    description:
      "Continuous improvements and seasonal content keep NGS moving forward.",
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

        <div className="mt-8 max-w-3xl">
          <p className="text-xl leading-9 text-gray-400">
            Every decision behind{" "}
            <span className="font-semibold text-white">
              Next Generation Survival
            </span>{" "}
            is made with one goal in mind: creating a DayZ experience that
            rewards exploration, teamwork and long-term survival. From server
            performance to community events, everything we build exists to
            create a world worth returning to.
          </p>
        </div>

        <Grid
          columns={2}
          className="mt-16"
        >
          {features.map((feature) => (
            <Card
              key={feature.title}
              padding="lg"
              className="
                group
                relative
                overflow-hidden
                border
                border-white/10
                bg-white/[0.03]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-lime-400/30
                hover:bg-white/[0.05]
                hover:shadow-[0_24px_48px_rgba(0,0,0,0.35)]
              "
            >
              <div
                className="
                  mb-8
                  h-1
                  w-12
                  rounded-full
                  bg-lime-400
                  transition-all
                  duration-300
                  group-hover:w-20
                "
              />

              <h3
                className="
                  text-3xl
                  font-bold
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-lime-400
                "
              >
                {feature.title}
              </h3>

              <p className="mt-5 max-w-md text-lg leading-8 text-gray-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}