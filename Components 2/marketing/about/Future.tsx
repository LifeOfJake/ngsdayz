import {
  Button,
  Card,
  Container,
  Heading,
  Section,
} from "../../../components/ui";

export default function Future() {
  return (
    <Section background="secondary">

      <Container>

        <Heading
          eyebrow="Looking Ahead"
          title={
            <>
              The Journey
              <br />
              Continues
            </>
          }
          description="NGS isn't being built for launch day. It's being built for the years that follow, with every update, every event and every player helping shape what comes next."
        />

      </Container>

    </Section>
  );
}