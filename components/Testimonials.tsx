import { Star } from "lucide-react";
import type { Review } from "@/lib/constants";

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function initials(name: string) {
  return name.replace(/[^A-Za-z ]/g, "").trim().slice(0, 1).toUpperCase() || "•";
}

function Card({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-who-blue/15 bg-white p-6 shadow-[0_8px_30px_-12px_rgba(0,94,184,0.18)]">
      <Stars />
      <blockquote className="mt-3 flex-1 text-[1.05rem] leading-relaxed text-ink/85">
        “{review.text}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-ink/10 pt-4">
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-who-blue/10 font-serif text-lg font-bold text-who-blue">
          {initials(review.name)}
        </span>
        <span>
          <span className="block font-serif font-bold leading-tight text-ink">{review.name}</span>
          <span className="text-sm font-medium text-who-blue">{review.state} State</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function TestimonialGroup({
  heading,
  reviews,
}: {
  heading: string;
  reviews: Review[];
}) {
  return (
    <div>
      <h3 className="mb-7 text-center font-serif text-2xl font-bold text-ink sm:text-3xl">{heading}</h3>
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((r) => (
          <Card key={r.name} review={r} />
        ))}
      </div>
    </div>
  );
}
