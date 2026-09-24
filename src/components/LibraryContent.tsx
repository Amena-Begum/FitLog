"use client";

import { useState } from "react";
import WorkoutCard from "./WorkOutCard";
import { Workout } from "../app/types/workout";

type Props = {
    workouts: Workout[];
};

export default function LibraryContent({
    workouts,
}: Props) {
    const [sortBy, setSortBy] = useState<
        "duration" | "calories" | "rating"
    >("duration");

    const sortedWorkouts = [...workouts].sort(
        (a, b) => {
            if (sortBy === "duration") {
                return a.duration - b.duration;
            }

            if (sortBy === "calories") {
                return a.caloriesBurned - b.caloriesBurned;
            }

            return a.rating - b.rating;
        }
    );

    return (
        <>
            {/* Header */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

                <div>
                    <h2 className="display-font text-4xl font-black uppercase sm:text-5xl">
                        THE LIBRARY
                    </h2>

                    <p className="mt-2 text-slate-400">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>

                {/* Sort */}
                <div className="flex items-center gap-3">
                    <label
                        htmlFor="sort"
                        className="text-sm font-bold uppercase tracking-wide text-slate-400"
                    >
                        Sort By
                    </label>

                    <select
                        id="sort"
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(
                                e.target.value as
                                    | "duration"
                                    | "calories"
                                    | "rating"
                            )
                        }
                        className="cursor-pointer rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold outline-none"
                    >
                        <option value="duration">
                            Duration
                        </option>

                        <option value="calories">
                            Calories
                        </option>

                        <option value="rating">
                            Rating
                        </option>
                    </select>
                </div>

            </div>

            {/* Workout Cards */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {sortedWorkouts.map((workout) => (
                    <WorkoutCard
                        key={workout.id}
                        workout={workout}
                    />
                ))}

            </div>
        </>
    );
}