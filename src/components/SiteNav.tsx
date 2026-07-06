import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="rounded-md p-2 transition hover:bg-accent/10">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>

              <SheetContent side="left" className="w-72">
                <SheetHeader>
                  <SheetTitle className="font-display text-2xl italic">
                    TripBuddy <span className="text-accent">AI (Beta)</span>
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-8 flex flex-col gap-5 text-lg">
                  <Link to="/" className="hover:text-accent">
                    Home
                  </Link>

                  <Link to="/plan" className="hover:text-accent">
                    Plan Outing
                  </Link>

                  <Link to="/history" className="hover:text-accent">
                    History
                  </Link>

                  <Link to="/about" className="hover:text-accent">
                    About
                  </Link>

                  <Link to="/feedback" className="hover:text-accent">
                    Feedback
                  </Link>
                </div>

              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="font-display text-2xl font-bold italic tracking-tight"
          >
            TripBuddy <span className="text-accent">AI (Beta)</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-6 text-xs font-medium uppercase tracking-widest">
          <Link
            to="/about"
            className="hidden text-foreground/70 transition-colors hover:text-accent sm:inline"
            activeProps={{ className: "text-accent" }}
          >
            About
          </Link>

          <Link
            to="/history"
            className="hidden text-foreground/70 transition-colors hover:text-accent sm:inline"
            activeProps={{ className: "text-accent" }}
          >
            History
          </Link>

          <Link
            to="/feedback"
            className="hidden text-foreground/70 transition-colors hover:text-accent sm:inline"
            activeProps={{ className: "text-accent" }}
          >
            Feedback
          </Link>

          <Link
            to="/plan"
            className="rounded-full bg-foreground px-5 py-2 text-background transition-colors hover:bg-accent"
          >
            Plan Outing
          </Link>
        </div>
      </div>
    </nav>
  );
}