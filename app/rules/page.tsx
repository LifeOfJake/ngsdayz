import {
  RulesHero,
  WhyRules,
  ThePrinciples,
  RuleBook,
} from "../components/rules";

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
