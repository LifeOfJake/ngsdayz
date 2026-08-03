import {
  AboutHero,
  OurStory,
  Heartlands,
  Future,
  WhatWeBelieve,
} from "../../Components 2/marketing/about";

import {
  Navbar,
  Footer,
  CTA,
} from "../../Components 2/layouts";

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