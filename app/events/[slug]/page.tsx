import { notFound } from "next/navigation";

import { events } from "../../components/data/events";

import {
  Navbar,
  Footer,
  CTA,
} from "../../components/layout";

import EventHero from "../../components/EventHero";
import DetailOverview from "../../components/DetailOverview";
import ChecklistSection from "../../components/ChecklistSection";
import FeatureGrid from "../../components/FeatureGrid"; 
import MediaGallery from "../../components/MediaGallery";
import EventIntelligence from "../../components/EventIntelligence";
import RelatedContent from "../../components/RelatedContent";

interface EventPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EventPage({
  params,
}: EventPageProps) {
  const { slug } = await params;

  const event = events.find(
    (event) => event.id === slug
  );

  if (!event) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main>

        <EventHero event={event} />

        <DetailOverview event={event} />

        <ChecklistSection event={event} />

        <FeatureGrid event={event} />

        <MediaGallery event={event} />

        <EventIntelligence event={event} />

        <RelatedContent event={event} />

        <CTA />

      </main>

      <Footer />
    </>
  );
}