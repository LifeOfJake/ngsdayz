import { news } from "../data/news";

import {
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Heading,
  Section,
} from "../ui";

export default function News() {
  return (
    <Section background="secondary">

      <Container>

        <Heading
          eyebrow="Latest News"
          title="What's Happening"
          description="Follow the latest development updates, server progress and community announcements."
        />

        <Grid
          columns={3}
          className="mt-20"
        >

          {news.map((article) => (

            <Card
              key={article.id}
              padding="md"
              className="group bg-white/[0.03] hover:bg-white/[0.05]"
            >

              <Badge>
                {article.category}
              </Badge>

              <h3 className="mt-8 text-3xl font-bold text-white transition-colors duration-300 group-hover:text-lime-400">

                {article.title}

              </h3>

              <p className="mt-6 leading-8 text-gray-400">

                {article.description}

              </p>

              <div className="mt-10 flex items-center justify-between">

                <span className="text-sm uppercase tracking-[3px] text-gray-500">

                  {article.date}

                </span>

                <Button
                  variant="ghost"
                  size="inline"
                  className="tracking-wide"
                >
                  Read More →
                </Button>

              </div>

            </Card>

          ))}

        </Grid>

      </Container>

    </Section>
  );
}