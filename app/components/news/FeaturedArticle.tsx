import Image from "next/image";
import { ArrowRight, Clock, Newspaper } from "lucide-react";

export default function FeaturedArticle() {
  return (
    <section className="bg-[#070707] py-32">

      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="text-sm font-black uppercase tracking-[8px] text-lime-400">
            Featured Story
          </p>

          <h2 className="mt-6 text-5xl font-black uppercase text-white md:text-6xl">
            Front Page
          </h2>

        </div>

        {/* Card */}

        <div className="group overflow-hidden rounded-[36px] border border-white/10 bg-[#101010] transition-all duration-500 hover:border-lime-400/40 hover:shadow-[0_25px_70px_rgba(163,255,0,.08)]">

          <div className="grid lg:grid-cols-2">

            {/* Image */}

            <div className="relative min-h-[420px] overflow-hidden">

              <Image
                src="/featured-news.png"
                alt="Featured Article"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#101010]/30" />

            </div>

            {/* Content */}

            <div className="flex flex-col justify-center p-12">

              <div className="mb-6 flex flex-wrap gap-3">

                <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-xs font-black uppercase tracking-[3px] text-lime-400">
                  Patch Notes
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[3px] text-gray-400">
                  Version 1.28
                </span>

              </div>

              <h3 className="text-4xl font-black uppercase leading-tight text-white">

                Patch 1.28

                <br />

                New Areas.
                New Stories.

              </h3>

              <p className="mt-8 text-lg leading-9 text-gray-300">

                Explore the latest changes coming to NGS.

                From balance adjustments and new locations to
                quality-of-life improvements, discover everything
                included in the newest update.

              </p>

              {/* Meta */}

              <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-gray-400">

                <div className="flex items-center gap-2">

                  <Clock size={16} />

                  5 min read

                </div>

                <div className="flex items-center gap-2">

                  <Newspaper size={16} />

                  Published 2 days ago

                </div>

              </div>

              {/* Button */}

              <button className="group mt-12 flex w-fit items-center gap-3 rounded-xl bg-lime-400 px-8 py-4 font-black uppercase tracking-wide text-black transition-all duration-300 hover:scale-105 hover:bg-lime-300">

                Read Article

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}