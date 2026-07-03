import NewsHero from "../components/NewsHero";
import FeaturedArticle from "../components/FeaturedArticle";
import NewsGrid from "../components/NewsGrid";

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