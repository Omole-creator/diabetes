import { CHECKOUT_URL } from "@/lib/constants";

type Props = {
  label: string;
  sub?: string;
  testId?: string;
  className?: string;
};

/**
 * The ONLY way to buy. Renders a solid #27AE60 anchor that opens the
 * Selar checkout in a new tab. Solid background-color (not a gradient)
 * so automated colour checks read rgb(39,174,96) reliably.
 */
export default function CTAButton({ label, sub, testId = "cta-primary", className = "" }: Props) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={testId}
      className={`group mx-auto flex w-full max-w-xl flex-col items-center justify-center rounded-2xl bg-cta-green px-6 py-5 text-center text-white no-underline shadow-lg shadow-cta-green/40 transition hover:bg-cta-green-dark animate-pulse-cta ${className}`}
    >
      <span className="text-xl font-extrabold leading-tight sm:text-2xl">{label}</span>
      {sub ? <span className="mt-1 text-sm font-medium text-white/90">{sub}</span> : null}
    </a>
  );
}
