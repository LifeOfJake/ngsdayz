"use client";

import { useState } from "react";

import {
  Swords,
  Hammer,
  Car,
  Users,
  ShieldAlert,
  LifeBuoy,
} from "lucide-react";

import RuleCard from "./RuleCard";

import { ruleCategories } from "../data";

export default function RuleBook() {
  const [openCard, setOpenCard] = useState<string>("combat");

  const toggleCard = (id: string) => {
    setOpenCard((current) => (current === id ? "" : id));
  };

  const icons = {
    swords: <Swords size={34} />,
    hammer: <Hammer size={34} />,
    car: <Car size={34} />,
    users: <Users size={34} />,
    "shield-alert": <ShieldAlert size={34} />,
    "life-buoy": <LifeBuoy size={34} />,
  };

  return (
    <section
      id="rulebook"
      className="bg-[#090909] py-36"
    >
      <div className="mx-auto max-w-7xl px-8">

        {/* Divider */}

        <div className="mx-auto mb-10 h-px w-40 bg-gradient-to-r from-transparent via-lime-400/60 to-transparent" />

        {/* Heading */}

        <div className="mx-auto mb-24 max-w-4xl text-center">

          <p className="text-sm font-black uppercase tracking-[8px] text-lime-400">
            The Rulebook
          </p>

          <h2 className="mt-6 text-5xl font-black uppercase leading-tight text-white md:text-7xl">

            Learn The Rules.
            <br />

            <span className="text-lime-400">
              Protect The Experience.
            </span>

          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-300">

            Everything below explains how we protect the
            survival experience that makes NGS unique.

            <br />

            Take a few minutes to familiarise yourself
            before joining the server.

          </p>

        </div>

        {/* Cards */}

        <div className="space-y-8">

          {ruleCategories.map((category) => (

            <RuleCard
              key={category.id}
              id={category.id}
              icon={
                icons[
                  category.icon as keyof typeof icons
                ]
              }
              title={category.title}
              subtitle={`${category.subtitle} • ${category.rules.length} Rules`}
              description={category.description}
              rules={category.rules}
              isOpen={openCard === category.id}
              onToggle={toggleCard}
            />

          ))}

        </div>

      </div>
    </section>
  );
}