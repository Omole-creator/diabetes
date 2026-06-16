"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-who-blue/15 overflow-hidden rounded-2xl border border-who-blue/20 bg-white">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
            >
              <span className="font-serif text-lg font-semibold text-ink sm:text-xl">{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 flex-shrink-0 text-who-blue transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-lg leading-relaxed text-ink/80">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
