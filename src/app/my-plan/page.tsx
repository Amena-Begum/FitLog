"use client";

import Link from "next/link";
import { useState } from "react";
import { useWorkoutStore } from "../../store/useWorkoutStore";
import PlanWorkoutCard from "../../components/PlanWorkoutCard";
import SavedWorkoutCard from "../../components/SaveWorkoutCard";

export default function MyPlan() {
    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

    const plan = useWorkoutStore((state) => state.plan);
    const saved = useWorkoutStore((state) => state.saved);

    // Today's Plan totals
    const planMinutes = plan.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const planCalories = plan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    // Saved totals
    const savedMinutes = saved.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const savedCalories = saved.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    const currentCount =
        activeTab === "plan" ? plan.length : saved.length;

    const currentMinutes =
        activeTab === "plan" ? planMinutes : savedMinutes;

    const currentCalories =
        activeTab === "plan"
            ? planCalories
            : savedCalories;

    return (
        <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">

            {/* Header */}
            <div>
                <h1 className="display-font text-5xl font-bold uppercase">
                    MY PLAN
                </h1>

                <p className="mt-3 text-slate-400">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* Metrics */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">

                {/* Exercises */}
                <div className="rounded-xl border border-zinc-800 bg-[#111827] p-5">
                    <p className="text-sm uppercase text-slate-500">
                        Exercises
                    </p>

                    <p className="mt-2 text-3xl font-bold">
                        {currentCount}
                    </p>
                </div>

                {/* Minutes */}
                <div className="rounded-xl border border-zinc-800 bg-[#111827] p-5">
                    <p className="text-sm uppercase text-slate-500">
                        Minutes
                    </p>

                    <p className="mt-2 text-3xl font-bold">
                        {currentMinutes}
                    </p>
                </div>

                {/* Calories */}
                <div className="rounded-xl border border-zinc-800 bg-[#111827] p-5">
                    <p className="text-sm uppercase text-slate-500">
                        Calories
                    </p>

                    <p className="mt-2 text-3xl font-bold">
                        {currentCalories}
                    </p>
                </div>

            </div>

            {/* Tabs */}
            <div className="mt-10 flex gap-6 border-b border-zinc-800">

                <button
                    onClick={() => setActiveTab("plan")}
                    className={`cursor-pointer border-b-2 px-2 pb-3 text-sm font-bold uppercase ${activeTab === "plan"
                            ? "border-lime-400 text-lime-400"
                            : "border-transparent text-slate-500 hover:text-white"
                        }`}
                >
                    Today&apos;s Plan
                </button>

                <button
                    onClick={() => setActiveTab("saved")}
                    className={`cursor-pointer border-b-2 px-2 pb-3 text-sm font-bold uppercase ${activeTab === "saved"
                            ? "border-lime-400 text-lime-400"
                            : "border-transparent text-slate-500 hover:text-white"
                        }`}
                >
                    Saved
                </button>

            </div>

            {/* Today's Plan */}
            {activeTab === "plan" && (
                <div className="mt-8">

                    {plan.length === 0 ? (
                        <div className="rounded-xl border border-zinc-800 bg-[#111827] px-6 py-16 text-center">

                            <h2 className="display-font text-3xl font-bold uppercase">
                                NOTHING HERE YET
                            </h2>

                            <p className="mx-auto mt-3 max-w-md text-slate-400">
                                Browse the library and add a lift to get today moving.
                            </p>

                            <Link
                                href="/"
                                className="mt-6 inline-block cursor-pointer rounded-lg bg-lime-400 px-6 py-3 font-bold uppercase text-black transition hover:opacity-90"
                            >
                                Go To Workouts
                            </Link>

                        </div>
                    ) : (
                        <div className="grid gap-5">

                            {plan.map((workout) => (
                                <PlanWorkoutCard
                                    key={workout.id}
                                    workout={workout}
                                />
                            ))}

                        </div>
                    )}

                </div>
            )}

            {/* Saved */}
            {activeTab === "saved" && (
                <div className="mt-8">

                    {saved.length === 0 ? (
                        <div className="rounded-xl border border-zinc-800 bg-[#111827] px-6 py-16 text-center">

                            <h2 className="display-font text-3xl font-bold uppercase">
                                NOTHING HERE YET
                            </h2>

                            <p className="mx-auto mt-3 max-w-md text-slate-400">
                                Save a workout from the library to find it here later.
                            </p>

                            <Link
                                href="/"
                                className="mt-6 inline-block cursor-pointer rounded-lg bg-lime-400 px-6 py-3 font-bold uppercase text-black transition hover:opacity-90"
                            >
                                Go To Workouts
                            </Link>

                        </div>
                    ) : (
                        <div className="grid gap-5">

                            {saved.map((workout) => (
                                <SavedWorkoutCard
                                    key={workout.id}
                                    workout={workout}
                                />
                            ))}

                        </div>
                    )}

                </div>
            )}

        </main>
    );
}