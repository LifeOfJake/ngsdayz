import {
  Card,
  Container,
  Heading,
} from "../../../components/ui";

import { Section } from "../../../components/marketing";

const categories = [
  {
    icon: "⚔️",
    title: "PvP Operations",
    description:
      "Fight for control of military locations, objectives and high-value rewards against rival survivors.",
  },
  {
    icon: "🚛",
    title: "Dynamic Convoys",
    description:
      "Intercept or defend moving military convoys carrying rare weapons, equipment and valuable supplies.",
  },
  {
    icon: "☢️",
    title: "Survival Challenges",
    description:
      "Enter toxic zones, complete dangerous expeditions and survive against the environment itself.",
  },
  {
    icon: "🗺️",
    title: "Exploration",
    description:
      "Discover hidden locations, treasure hunts and unique adventures spread throughout the Heartlands.",
  },
  {
    icon: "🏆",
    title: "Competitive Events",
    description:
      "King of the Hill, tournaments and community competitions designed for those seeking a challenge.",
  },
  {
    icon: "🎄",
    title: "Seasonal Events",
    description:
      "Special operations celebrating Halloween, Christmas and unique community milestones.",
  },
];

export default function EventCategories() {
  return (
    <Section>

      <Container>

        <Heading
          eyebrow="Something For Everyone"
          title={
            <>
              Every Survivor
              <br />
              <span className="text-lime-400">
                Has A Role
              </span>
            </>
          }
          description="Whether you enjoy combat, exploration or simply surviving with friends, there's always an event waiting for you."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (

            <Card
              key={category.title}
              variant="default"
            >

              <div className="text-5xl">
                {category.icon}
              </div>

              <h3 className="mt-8 text-3xl font-black uppercase text-white">
                {category.title}
              </h3>

              <p className="mt-6 leading-8 text-gray-300">
                {category.description}
              </p>

            </Card>

          ))}

        </div>

      </Container>

    </Section>
  );
}