import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const AVATARS = [
  { src: "/images/avatars/f2.png", alt: "Happy reader" },
  { src: "/images/avatars/f3.png", alt: "Happy reader" },
  { src: "/images/avatars/f4.png", alt: "Happy reader" },
];

/**
 * Social-proof badge for the top of the hero: 3 reader headshots + rating.
 * Styled to sit on the existing blue hero (white / translucent), so the
 * site's blue palette is unchanged.
 */
export default function ReviewsBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 rounded-full bg-cta-green px-3 py-1.5 shadow-lg shadow-cta-green/30 ring-1 ring-white/30",
        className,
      )}
    >
      <div className="flex items-center">
        {AVATARS.map((a, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={a.src}
            alt={a.alt}
            width={26}
            height={26}
            className={cn(
              "size-[26px] rounded-full border-2 border-white object-cover",
              i > 0 && "-ml-2",
            )}
          />
        ))}
      </div>
      {/* stars + label kept together on one line; wraps as a unit on tiny screens */}
      <div className="flex items-center gap-1.5 whitespace-nowrap">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-xs font-semibold text-white">917 Reviews and Counting</span>
      </div>
    </div>
  );
}
