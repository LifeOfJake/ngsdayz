import Image from "next/image";

export default function NewsHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}

      <Image
        src="/news-hero.png"
        alt="NGS News"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-8 pt-32">

        <div className="grid w-full items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT */}

          <div>

            <p className="mb-6 text-sm font-black uppercase tracking-[10px] text-lime-400">
              Community Updates
            </p>

            <h1 className="leading-none">

              <span className="block text-6xl font-black uppercase text-white xl:text-8xl">
                Stay
              </span>

              <span className="block text-6xl font-black uppercase text-lime-400 xl:text-8xl">
                Informed
              </span>

            </h1>

            <h2 className="mt-8 text-3xl font-bold text-white">
              Everything happening across Next Generation Survival.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
              From server updates and community announcements to major
              events and development news, this is the home of everything
              happening across NGS.
            </p>

          </div>

          {/* RIGHT */}

          <div>

            <div className="rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl shadow-2xl">

              <h3 className="mb-8 text-sm font-black uppercase tracking-[6px] text-lime-400">
                Latest Update
              </h3>

              <div className="space-y-5">

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">Server Status</span>
                  <span className="font-bold text-lime-400">
                    🟢 Online
                  </span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">Current Version</span>
                  <span className="font-bold text-white">
                    1.28
                  </span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">Latest Event</span>
                  <span className="font-bold text-white">
                    Friday Night Fight
                  </span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">Latest Article</span>
                  <span className="font-bold text-white">
                    Patch Notes
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Published</span>
                  <span className="font-bold text-lime-400">
                    2 Days Ago
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll */}

      <div className="absolute bottom-14 left-1/2 z-20 -translate-x-1/2 animate-bounce">

        <div className="flex flex-col items-center">

          <span className="text-3xl text-gray-300">
            ↓
          </span>

          <p className="mt-2 text-xs font-black uppercase tracking-[5px] text-gray-400">
            Latest Stories
          </p>

        </div>

      </div>

      {/* Fade */}

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#070707] to-transparent" />

    </section>
  );
}