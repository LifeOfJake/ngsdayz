import {
  Hero,
  Vision,
  Features,
  News,
  Events,
} from "./components/home";

import {
  Navbar,
  Footer,
  CTA,
} from "./components/layout";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Vision />
      <Features />
      <News />
      <Events />
      <CTA />
      <Footer />
    </>
  );
}