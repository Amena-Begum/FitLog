import { getWorkouts } from "../app/library/api";
import WorkoutCard from "./WorkOutCard";

export default async function Library() {
    const workouts = await getWorkouts();

    return (
        <section
            id="library"
            className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10"
        >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <h2 className="display-font text-4xl font-black uppercase sm:text-5xl">
                        THE LIBRARY
                    </h2>

                    <p className="mt-2 text-slate-400">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>

                {/* Sort dropdown - Challenge */}
                <div className="flex items-center gap-3">
                    <label
                        htmlFor="sort"
                        className="text-sm font-bold uppercase tracking-wide text-slate-400"
                    >
                        Sort By
                    </label>

                    <select
                        id="sort"
                        className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold outline-none"
                        defaultValue="duration"
                    >
                        <option value="duration">Duration</option>
                        <option value="calories">Calories</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {workouts.map((workout) => (
                    <WorkoutCard
                        key={workout.id}
                        workout={workout}
                    />
                ))}
            </div>
        </section>
    );
}