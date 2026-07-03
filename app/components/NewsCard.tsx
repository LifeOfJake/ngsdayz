import Image from "next/image";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";

interface NewsCardProps {
  image: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
}

export default function NewsCard({
  image,
  category,
  title,
  summary,
  date,
  readTime,
}: NewsCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101010] transition-all duration-500 hover:-translate-y-2 hover:border-lime-400/40 hover:shadow-[0_30px_80px_rgba(163,255,0,.08)]">

      {/* Image */}

      <div className="relative h-64 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <span className="absolute left-6 top-6 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-xs font-black uppercase tracking-[3px] text-lime-400 backdrop-blur">

          {category}

        </span>

      </div>

      {/* Content */}

      <div className="p-8">

        <h3 className="text-3xl font-black uppercase leading-tight text-white transition-colors duration-300 group-hover:text-lime-400">

          {title}

        </h3>

        <p className="mt-6 leading-8 text-gray-400">

          {summary}

        </p>

        {/* Meta */}

        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-500">

          <div className="flex items-center gap-2">

            <CalendarDays size={16} />

            {date}

          </div>

          <div className="flex items-center gap-2">

            <Clock size={16} />

            {readTime}

          </div>

        </div>

        {/* Divider */}

        <div className="my-8 h-px bg-white/10" />

        {/* Read */}

        <button className="group/button flex items-center gap-3 font-black uppercase tracking-[2px] text-lime-400 transition-colors hover:text-lime-300">

          Read Story

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover/button:translate-x-1"
          />

        </button>

      </div>

    </article>
  );
}