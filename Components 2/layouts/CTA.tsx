import Link from "next/link";

import { community } from "../../data/community";

import {
  Button,
  Card,
  Container,
  Heading,
  Section,
} from "../../components/ui";

export default function CTA() {
  return (
    <Section background="secondary">

      <Container size="lg">

        <Card
          variant="glass"
          padding="lg"
          className="
            overflow-hidden
            rounded-[40px]
            border-lime-400/20
            bg-gradient-to-br
            from-lime-400/10
            via-[#111111]
            to-[#090909]
            p-16
            text-center
            shadow-[0_30px_80px_rgba(163,255,0,.08)]
          "
        >

          <Heading
            eyebrow="Your Story Starts Here"
            size="xl"
            title={
              <>
                Ready To
                <br />
                Survive?
              </>
            }
            description={
              <>
                Whether you're looking for intense PvP, rewarding PvE,
                custom events, trading, exploration or building the perfect
                base...
                <br />
                <br />
                NGS has been designed to give every survivor
                a story worth telling.
              </>
            }
          />

          <div className="mt-14 flex flex-col justify-center gap-6 sm:flex-row">

            <Link href={community.playNow}>
              <Button>
                Enter Chernarus
              </Button>
            </Link>

            <Link
              href={community.discord}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="secondary">
                Join Discord
              </Button>
            </Link>

          </div>

        </Card>

      </Container>

    </Section>
  );
}