"use client";

import { useEffect, useState } from "react";

const WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours
const KEY = "esa_deadline";

function two(n: number) {
  return n.toString().padStart(2, "0");
}

export default function CountdownTimer() {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    let deadline = Number(localStorage.getItem(KEY));
    if (!deadline || Number.isNaN(deadline) || deadline < Date.now()) {
      deadline = Date.now() + WINDOW_MS;
      localStorage.setItem(KEY, String(deadline));
    }
    const tick = () => setRemaining(Math.max(0, deadline - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const total = remaining ?? WINDOW_MS;
  const h = Math.floor(total / 3_600_000);
  const m = Math.floor((total % 3_600_000) / 60_000);
  const s = Math.floor((total % 60_000) / 1000);

  const Box = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center">
      <span className="min-w-[3.2rem] rounded-lg bg-ink px-3 py-2 font-sans text-3xl font-extrabold tabular-nums text-white sm:text-4xl">
        {value}
      </span>
      <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink/60">{label}</span>
    </div>
  );

  return (
    <div
      suppressHydrationWarning
      className="flex items-center justify-center gap-3 sm:gap-4"
      aria-label="Discount time remaining"
    >
      <Box value={two(h)} label="Hours" />
      <span className="pb-5 text-2xl font-bold text-ink/40">:</span>
      <Box value={two(m)} label="Mins" />
      <span className="pb-5 text-2xl font-bold text-ink/40">:</span>
      <Box value={two(s)} label="Secs" />
    </div>
  );
}
