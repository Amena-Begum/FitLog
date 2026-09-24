import { getWorkouts } from "../app/library/api";
import WorkoutCard from "./WorkOutCard";

export default async function Library() {
    const workouts = await getWorkouts();

    return (
        <section
            id="library"
            className="mx-auto max-w-7xl px-5 py-16"
        >
            <h2 className="text-4xl font-black uppercase">
                THE LIBRARY
            </h2>

            <p className="mt-2 text-slate-400">
                Twelve lifts covering every major muscle group.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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