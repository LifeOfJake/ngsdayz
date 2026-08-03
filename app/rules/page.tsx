import {
  RulesHero,
  WhyRules,
  /**ThePrinciples,**/
  RuleBook,
} from "../../Components 2/marketing/rules";

import {
  Navbar,
  Footer,
  CTA,
} from "../../Components 2/layouts";

export default function RulesPage() {
    return (
        <main>
            <Navbar />
            <RulesHero />
            <WhyRules />
            <RuleBook />
            <CTA />
            <Footer />
        </main>
    );
}
