import EventsHero from "../components/EventsHero";
import FeaturedOperation from "../components/FeaturedOperation";
import UpcomingEvents from "../components/UpcomingEvents";
import EventCategories from "../components/EventCategories";

import {
  Navbar,
  Footer,
  CTA,
} from "../components/layout";

export default function EventsPage() {
  return (
    <>
      <Navbar />

      <main>

        <EventsHero />

        <FeaturedOperation />

        <UpcomingEvents />

        <EventCategories />

        <CTA />

      </main>

      <Footer />
    </>
  );
}