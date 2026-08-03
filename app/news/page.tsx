import {
  NewsHero,
  FeaturedArticle,
  NewsGrid,
} from "../../Components 2/marketing/news";

import {
  Navbar,
  Footer,
 CTA,
} from "../../Components 2/layouts";

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