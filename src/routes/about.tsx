import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SurpriseButton } from "@/components/SurpriseButton";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title: "About — TripBuddy AI" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Hero */}
        <header className="mb-16 text-center">
          <h1 className="font-display text-5xl italic md:text-6xl">About TripBuddy AI</h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            TripBuddy AI is your smart travel companion that helps you create personalized trips in
            seconds. Whether you're planning a weekend getaway, a family vacation, or a spontaneous
            outing with friends, TripBuddy takes care of the planning so you can focus on making
            memories.
          </p>
        </header>

        {/* Features */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="mb-5 text-4xl">🗺️</div>

            <h2 className="font-display text-2xl italic">Smart Planning</h2>

            <p className="mt-3 text-muted-foreground">
              Generate detailed itineraries based on your budget, destination, travel duration, and
              preferences using AI.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="mb-5 text-4xl">💰</div>

            <h2 className="font-display text-2xl italic">Budget Friendly</h2>

            <p className="mt-3 text-muted-foreground">
              Receive realistic cost estimates for travel, food, shopping, attractions, and more to
              help you plan better.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="mb-5 text-4xl">✨</div>

            <h2 className="font-display text-2xl italic">AI Powered</h2>

            <p className="mt-3 text-muted-foreground">
              Powered by Google's Gemini AI to provide personalized travel ideas, packing lists,
              transport suggestions, and useful travel tips.
            </p>
          </div>
        </div>

        {/* Mission */}
        <section className="mt-16 rounded-3xl border border-border bg-card p-10">
          <h2 className="font-display text-4xl italic">Our Mission</h2>

          <p className="mt-5 leading-8 text-muted-foreground">
            Planning a trip should be exciting—not stressful. TripBuddy AI was created to simplify
            travel planning by combining artificial intelligence with user preferences to generate
            personalized travel experiences in just a few seconds.
          </p>

          <p className="mt-4 leading-8 text-muted-foreground">
            Our goal is to help travellers spend less time searching and more time exploring. From
            choosing destinations to estimating expenses, TripBuddy AI makes every journey easier to
            plan.
          </p>
        </section>

        {/* Why Choose */}
        <section className="mt-16">
          <h2 className="mb-8 font-display text-4xl italic">Why Choose TripBuddy?</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-6">
              ✅ Personalized travel plans
            </div>

            <div className="rounded-3xl border border-border bg-card p-6">💸 Budget estimation</div>

            <div className="rounded-3xl border border-border bg-card p-6">
              🚗 Transport recommendations
            </div>

            <div className="rounded-3xl border border-border bg-card p-6">
              🎒 Smart packing suggestions
            </div>

            <div className="rounded-3xl border border-border bg-card p-6">
              📍 Real destination recommendations
            </div>

            <div className="rounded-3xl border border-border bg-card p-6">
              ⚡ AI generated in seconds
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-20 border-t border-border pt-8 text-center">
          <h3 className="font-display text-2xl italic">Ready for your next adventure?</h3>

          <p className="mt-3 text-muted-foreground">
            Let TripBuddy AI plan your next unforgettable journey.
          </p>
        </div>
      </div>

      <SurpriseButton />
    </div>
  );
}
