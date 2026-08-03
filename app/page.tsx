import {
  Hero,
  Vision,
  Features,
  News,
  Events,
  NetworkOperations,
} from "../Components 2/marketing/homepage";

import {
  Navbar,
  Footer,
  CTA,
} from "../Components 2/layouts";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <NetworkOperations />
      <Vision />
      <Features />
      <News />
      <Events />
      <CTA />
      <Footer />
    </>
  );
}