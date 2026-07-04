import {
  Hero,
  Vision,
  Features,
  News,
  Events,
  NetworkOperations,
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