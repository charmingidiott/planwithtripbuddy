import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SurpriseButton } from "@/components/SurpriseButton";

export const Route = createFileRoute("/feedback")({
  head: () => ({
    meta: [{ title: "Feedback — TripBuddy AI (Beta)" }],
  }),
  component: FeedbackPage,
});

function FeedbackPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Hero */}
        <header className="mb-14 text-center">
          <div className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            Beta Program
          </div>

          <h1 className="font-display text-5xl italic md:text-6xl">
            We'd Love Your Feedback
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            TripBuddy AI is currently in Beta. Every suggestion, bug report and
            idea helps us improve the experience before the official launch.
          </p>
        </header>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-6">
            <div className="font-mono text-xs uppercase tracking-widest text-accent">
              01.
            </div>

            <h3 className="mt-3 font-display text-2xl italic">
              Found a Bug?
            </h3>

            <p className="mt-3 text-muted-foreground">
              Tell us what happened and how we can reproduce it.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <div className="font-mono text-xs uppercase tracking-widest text-accent">
              02.
            </div>

            <h3 className="mt-3 font-display text-2xl italic">
              Have an Idea?
            </h3>

            <p className="mt-3 text-muted-foreground">
              New features, destinations or improvements—we're listening.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <div className="font-mono text-xs uppercase tracking-widest text-accent">
              03.
            </div>

            <h3 className="mt-3 font-display text-2xl italic">
              Share Your Experience
            </h3>

            <p className="mt-3 text-muted-foreground">
              Even if everything worked perfectly, we'd love to know what you
              enjoyed.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-3xl border border-border bg-card p-12 text-center">
          <div className="text-5xl">💬</div>

          <h2 className="mt-6 font-display text-4xl italic">
            It only takes 2 minutes
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Your feedback directly shapes TripBuddy AI. Every response is read,
            discussed and helps us build a better trip planner for everyone.
          </p>

          <a
            href="https://forms.gle/NVhSQJZyHwBN9aKd8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-accent-foreground transition hover:opacity-90"
          >
            Leave Feedback →
          </a>
        </div>
      </div>

      <footer className="border-t border-border py-10 text-center">
        <div className="font-display text-xl italic">TripBuddy AI</div>

        <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Currently in Beta • Built with ❤️ to make planning outings effortless.
          <br />
          Made for adventure • {new Date().getFullYear()}
        </div>
      </footer>

      <SurpriseButton />
    </div>
  );
}