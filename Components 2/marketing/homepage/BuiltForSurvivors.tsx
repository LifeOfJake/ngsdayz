import { Section } from "../../../components/ui";

const pillars = [
  {
    icon: "🌍",
    title: "Persistent World",
    heading: "The world remembers.",
    description:
      "Bases rise. Empires fall. Every decision leaves its mark on the people who survive after you.",
  },
  {
    icon: "⚔️",
    title: "Meaningful Survival",
    heading: "Every choice matters.",
    description:
      "Resources have value. Encounters have consequences. The greatest victories are earned—not given.",
  },
  {
    icon: "🤝",
    title: "Community Driven",
    heading: "Built with players, not just for them.",
    description:
      "Every update, every improvement and every new idea begins with the people who call NGS home.",
  },
];

export default function BuiltForSurvivors() {
  return (
    <Section
      id="built-for-survivors"
      spacing="lg"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-black uppercase tracking-[6px] text-lime-400">
          Built For Survivors
        </p>

        <h2 className="mt-6 text-5xl font-black tracking-tight text-white">
          More Than A Server.
        </h2>

        <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-lime-400 to-transparent" />

        <div className="mt-10 space-y-8 text-lg leading-9 text-gray-300">
          <p>
            Every decision behind{" "}
            <span className="font-bold text-white">
              Next Generation Survival
            </span>{" "}
            is made with one goal in mind — creating a DayZ experience that
            rewards exploration, teamwork and long-term survival.
          </p>

          <p>
            We aren't chasing trends or building a world that resets every
            weekend. We're creating a place where every journey, every
            encounter and every decision has meaning.
          </p>

          <p>
            Whether you're setting foot on the coast for the first time or
            returning after hundreds of hours, NGS is built to give you a
            reason to come back tomorrow.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-28 grid max-w-7xl gap-8 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-10
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-lime-400/30
              hover:bg-lime-400/[0.04]
            "
          >
            <div className="text-5xl">
              {pillar.icon}
            </div>

            <p className="mt-8 text-xs font-black uppercase tracking-[4px] text-lime-400">
              {pillar.title}
            </p>

            <h3 className="mt-4 text-3xl font-black text-white">
              {pillar.heading}
            </h3>

            <p className="mt-6 leading-8 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
              {pillar.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-32 max-w-4xl text-center">
        <div className="mx-auto mb-10 h-px w-40 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <blockquote className="text-3xl font-light italic leading-relaxed text-white md:text-4xl">
          “This isn't just another DayZ server.
          <br />
          It's the beginning of your next story.”
        </blockquote>
      </div>
    </Section>
  );
}