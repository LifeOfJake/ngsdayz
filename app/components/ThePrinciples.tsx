import {
  Backpack,
  CircleHelp,
  Handshake,
  Scale,
} from "lucide-react";

import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Heading,
  Section,
} from "./ui";

const principles = [
  {
    icon: Scale,
    title: "Fair Play",
    description:
      "Win through good decisions, teamwork and skill—not exploits, glitches or unfair advantages.",
  },
  {
    icon: Handshake,
    title: "Respect Others",
    description:
      "Every survivor deserves the same opportunity to enjoy the world, whether they're friend, rival or stranger.",
  },
  {
    icon: Backpack,
    title: "Respect Survival",
    description:
      "Risk creates reward. Every challenge, victory and setback should contribute to a meaningful survival experience.",
  },
  {
    icon: CircleHelp,
    title: "Ask First",
    description:
      "Unsure whether something is allowed? Ask a member of staff before acting. We'd always rather answer a question than resolve a rule break.",
  },
];

export default function ThePrinciples() {
  return (
    <Section background="secondary">

      <Container>

        <Divider
  variant="gradient"
  className="mx-auto mb-10 w-32"
/>

        <Heading
          eyebrow="The Principles"
          title={
            <>
              The Standard
              <br />
              <span className="text-lime-400">
                We All Play By
              </span>
            </>
          }
          description="Before you learn the rules, understand the principles behind them. Every rule on NGS exists to protect these four ideas."
        />

        <Grid
          columns={2}
          className="mt-20"
        >

          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <Card
                key={principle.title}
                padding="lg"
                className="group flex h-full flex-col bg-black/40 backdrop-blur"
              >

                <Icon
                  size={42}
                  className="mb-6 text-lime-400 transition-transform duration-300 group-hover:scale-110"
                />

                <h3 className="text-3xl font-black uppercase text-white transition-colors duration-300 group-hover:text-lime-400">

                  {principle.title}

                </h3>

                <p className="mt-6 flex-1 leading-8 text-gray-300">

                  {principle.description}

                </p>

                <Divider className="mt-8" />

                <Button
                  variant="ghost"
                  size="inline"
                  className="mt-6 self-start"
                >
                  Read Related Rules ↗
                </Button>

              </Card>
            );
          })}

        </Grid>

      </Container>

    </Section>
  );
}