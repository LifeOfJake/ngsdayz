"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navigation } from "../../data/navigation";
import { community } from "../../data/community";

export default function Navbar() {
  const pathname = usePathname();

  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 40);

      if (currentScroll < 80) {
        setVisible(true);
      } else {
        setVisible(currentScroll < lastScroll);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto mt-5 max-w-7xl px-6">

        <div
          className={`flex h-20 items-center justify-between rounded-2xl border px-8 transition-all duration-500 ${
            scrolled
              ? "border-white/10 bg-black/75 shadow-2xl backdrop-blur-2xl"
              : "border-white/5 bg-black/40 backdrop-blur-xl"
          }`}
        >

          {/* Logo */}

          <Link
            href="/"
            className="group"
          >

            <div>

              <h1 className="text-4xl font-black tracking-[0.18em] text-lime-400 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(163,255,0,.55)]">

                NGS

              </h1>

              <p className="mt-1 text-[11px] uppercase tracking-[0.45em] text-gray-500 transition-colors duration-300 group-hover:text-gray-300">

                DayZ Community

              </p>

            </div>

          </Link>

          {/* Navigation */}

          <nav>

            <ul className="flex items-center gap-10 text-sm font-bold uppercase tracking-[0.25em]">

              {navigation.map((item) => {
                const active = pathname === item.href;

                return (
                  <li
                    key={item.label}
                    className="relative"
                  >

                    <Link
                      href={item.href}
                      className={`group transition-colors duration-300 ${
                        active
                          ? "text-lime-400"
                          : "text-white hover:text-lime-400"
                      }`}
                    >

                      {item.label}

                      <span
                        className={`absolute -bottom-2 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-lime-400 transition-all duration-300 ${
                          active
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />

                    </Link>

                  </li>
                );
              })}

              <li>

                <a
                  href={community.discord}
                  target="_blank"
                  rel="noreferrer"
                  className="relative transition-colors duration-300 hover:text-lime-400"
                >

                  Discord

                  <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-lime-400 transition-all duration-300 hover:w-full" />

                </a>

              </li>

            </ul>

          </nav>

          {/* Play Button */}

          <button className="group rounded-xl border border-white/10 bg-white/5 px-7 py-3 font-black uppercase tracking-wide text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-lime-400 hover:bg-lime-400 hover:text-black hover:shadow-[0_0_25px_rgba(163,255,0,.35)]">

            <span className="flex items-center gap-2">

              Play Now

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>

            </span>

          </button>

        </div>

      </div>

    </header>
  );
}