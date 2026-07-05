import { Link } from "@tanstack/react-router";

export function BetaMarquee() {
  return (
    <div className="border-y border-accent/20 bg-accent/10 overflow-hidden">
      <div className="relative flex whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-16 py-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-3 text-sm font-medium tracking-wide text-foreground"
            >
              <span className="text-lg">🚀</span>
              <span>
                You're using <strong>TripBuddy AI Beta</strong>! Help us build
                the best trip planner by trying it out and sharing your
                feedback. Every suggestion counts.
              </span>

              <Link
                to="/feedback"
                className="rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground transition hover:scale-105"
              >
                Give Feedback
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}