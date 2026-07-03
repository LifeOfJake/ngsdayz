import {
  EventsHero,
  FeaturedOperation,
  UpcomingEvents,
  EventCategories,
} from "../components/events";

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