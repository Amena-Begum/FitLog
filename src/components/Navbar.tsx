"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
    planCount?: number;
    savedCount?: number;
}

export default function Navbar({
    planCount = 0,
    savedCount = 0,
}: NavbarProps) {
    const pathname = usePathname();

    const isWorkoutActive = pathname === "/";
    const isPlanActive = pathname === "/my-plan";

    return (
        <header className="border-b border-[var(--border)] bg-[var(--background)]">
            <nav className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2"
                    aria-label="FitLog Home"
                >
                    <span className="flex h-8 w-8 items-center justify-center border-2 border-[var(--accent)] text-sm font-black text-[var(--accent)]">
                        F
                    </span>

                    <span className="display-font text-2xl font-bold tracking-wide">
                        FITLOG
                    </span>
                </Link>

                {/* Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        href="/"
                        className={`relative py-2 text-sm font-bold uppercase tracking-wider transition ${isWorkoutActive
                                ? "text-[var(--accent)]"
                                : "text-[var(--muted)] hover:text-white"
                            }`}
                    >
                        Workout

                        {isWorkoutActive && (
                            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[var(--accent)]" />
                        )}
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`relative py-2 text-sm font-bold uppercase tracking-wider transition ${isPlanActive
                                ? "text-[var(--accent)]"
                                : "text-[var(--muted)] hover:text-white"
                            }`}
                    >
                        My Plan

                        {isPlanActive && (
                            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[var(--accent)]" />
                        )}
                    </Link>
                </div>

                {/* Counters */}
                <div className="flex items-center gap-2">
                    <Link
                        href="/my-plan"
                        className="rounded-full bg-[var(--accent)] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-black transition hover:opacity-90 sm:px-4"
                    >
                        Plan {planCount}
                    </Link>

                    <Link
                        href="/my-plan"
                        className="rounded-full border border-[var(--accent)] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-black sm:px-4"
                    >
                        Saved {savedCount}
                    </Link>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div className="border-t border-[var(--border)] px-5 py-3 md:hidden">
                <div className="flex items-center justify-center gap-8">
                    <Link
                        href="/"
                        className={`text-xs font-bold uppercase tracking-widest ${isWorkoutActive
                                ? "text-[var(--accent)]"
                                : "text-[var(--muted)]"
                            }`}
                    >
                        Workout
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`text-xs font-bold uppercase tracking-widest ${isPlanActive
                                ? "text-[var(--accent)]"
                                : "text-[var(--muted)]"
                            }`}
                    >
                        My Plan
                    </Link>
                </div>
            </div>
        </header>
    );
}