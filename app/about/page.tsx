import {
  AboutHero,
  OurStory,
  Heartlands,
  Future,
  WhatWeBelieve,
} from "../components/about";

import {
  Navbar,
  Footer,
  CTA,
} from "../components/layout";

export default function AboutPage() {
  return (
    <>
      <Navbar />

<main>

  <AboutHero />

  <OurStory />

  <Heartlands />

  <WhatWeBelieve />

  <Future />

  <CTA />

</main>

      <Footer />
    </>
  );
}