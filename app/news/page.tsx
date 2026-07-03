import {
  Navbar,
  Footer,
  CTA,
} from "../components/layout";

import {
  NewsHero,
  FeaturedArticle,
  NewsGrid,
  NewsCard,
} from "../components/news";

export default function NewsPage() {
  return (
    <>
      <Navbar />

      <main>

        <NewsHero />

        <FeaturedArticle />

        <NewsGrid />

        <NewsCard />

        <CTA />

      </main>

      <Footer />
    </>
  );
}