import { HeartPulse, ShieldCheck } from "lucide-react";

export default function StickyHeader() {
  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-50 w-full bg-who-blue text-white shadow-[0_4px_20px_-6px_rgba(0,94,184,0.6)]"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <span className="flex items-center gap-2 font-serif text-base font-bold leading-tight sm:text-lg">
          <HeartPulse className="h-5 w-5" />
          Diabetes Health
        </span>
        <span className="flex items-center gap-1.5 text-xs font-semibold sm:text-sm">
          <ShieldCheck className="h-4 w-4" />
          Doctor Reviewed
        </span>
      </div>
    </header>
  );
}
