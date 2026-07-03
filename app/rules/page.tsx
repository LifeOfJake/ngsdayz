import RulesHero from "../components/RulesHero";
import WhyRules from "../components/about/WhyRules";
import ThePrinciples from "../components/ThePrinciples";
import RuleBook from "../components/RuleBook";

import {
  Navbar,
  Footer,
  CTA,
} from "../components/layout";

export default function RulesPage() {
    return (
        <main>
            <Navbar />
            <RulesHero />
            <WhyRules />
            <ThePrinciples />
            <RuleBook />
            <CTA />
            <Footer />
        </main>
    );
}
