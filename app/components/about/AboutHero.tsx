import Image from "next/image";

import {
  Container,
  Divider,
  GlassPanel,
} from "../ui";

const values = [
  {
    label: "Community",
    value: "First",
  },
  {
    label: "Gameplay",
    value: "Balanced",
  },
  {
    label: "Stories",
    value: "Player Driven",
  },
  {
    label: "Philosophy",
    value: "Purpose",
  },
];

export default function AboutHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      <Image
        src="/hero.png"
        alt="NGS - Our Story"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 flex min-h-screen items-center pt-32">

        <Container>

          <div className="grid items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">

            {/* Left */}

            <div>

              <p className="mb-6 text-sm font-black uppercase tracking-[10px] text-lime-400">
                Next Generation Survival
              </p>

              <h1 className="leading-none">

                <span className="block text-6xl font-black uppercase text-white xl:text-8xl">
                  Our
                </span>

                <span className="block text-6xl font-black uppercase text-lime-400 xl:text-8xl">
                  Story
                </span>

              </h1>

              <h2 className="mt-8 text-3xl font-bold text-white">
                Built with Purpose.
                <br />
                Driven by Community.
                <br />
                Defined by Survival.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
                Every survivor has a story.
                <br />
                Every story starts somewhere.
              </p>

            </div>

            {/* Right */}

            <GlassPanel
              tint="dark"
              padding="lg"
            >

              <h3 className="mb-8 text-sm font-black uppercase tracking-[6px] text-lime-400">
                The Heartlands
              </h3>

              <blockquote className="border-l-4 border-lime-400 pl-6 text-lg italic leading-8 text-gray-300">

                "The greatest stories aren't written by developers.

                <br />
                <br />

                They're written by the survivors who call this world home."

              </blockquote>

              <div className="mt-10">

                {values.map((item, index) => (

                  <div key={item.label}>

                    <div className="flex items-center justify-between py-3">

                      <span className="font-bold text-white">

                        {item.label}

                      </span>

                      <span className="text-lime-400">

                        {item.value}

                      </span>

                    </div>

                    {index !== values.length - 1 && (
                      <Divider spacing="sm" />
                    )}

                  </div>

                ))}

              </div>

            </GlassPanel>

          </div>

        </Container>

      </div>

      <div className="absolute bottom-14 left-1/2 z-20 -translate-x-1/2 animate-bounce">

        <div className="flex flex-col items-center">

          <span className="text-3xl text-gray-300">
            ↓
          </span>

          <p className="mt-2 text-xs font-black uppercase tracking-[5px] text-gray-400">
            Discover Our Story
          </p>

        </div>

      </div>

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#070707] to-transparent" />

    </section>
  );
}