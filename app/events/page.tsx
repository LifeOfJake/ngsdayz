import {
  EventsHero,
  FeaturedOperation,
  UpcomingEvents,
  EventCategories,
} from "../../Components 2/marketing/events";

import {
  Navbar,
  Footer,
  CTA,
} from "../../Components 2/layouts";

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