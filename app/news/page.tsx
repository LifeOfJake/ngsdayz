import {
  NewsHero,
  FeaturedArticle,
  NewsGrid,
} from "../components/news";

import {
  Navbar,
  Footer,
 CTA,
} from "../components/layout";

export default function NewsPage() {
  return (
    <>
      <Navbar />

      <main>

        <NewsHero />

        <FeaturedArticle />

        <NewsGrid />

        <CTA />

      </main>

      <Footer />
    </>
  );
}