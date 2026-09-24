import Image from "next/image";
import Link from "next/link";
import { Workout } from "../app/types/workout";

type Props = {
    workout: Workout;
};

export default function WorkoutCard({
    workout,
}: Props) {
    return (
        <Link
            href={`/workout/${workout.id}`}
            className="group block"
        >
            <article className="overflow-hidden rounded-xl border border-zinc-800 bg-[#111827] transition duration-300 hover:-translate-y-1 hover:border-lime-400">

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="p-5">

                    {/* Muscle Group Tags */}
                    <div className="mb-3 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((group) => (
                            <span
                                key={group}
                                className="rounded-full bg-lime-400/10 px-3 py-1 text-xs font-semibold uppercase text-lime-400"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    {/* Workout Name */}
                    <h3 className="text-lg font-bold uppercase">
                        {workout.name}
                    </h3>

                    {/* Equipment */}
                    <p className="mt-2 text-sm text-slate-400">
                        {workout.equipment}
                    </p>

                    {/* Stats */}
                    <div className="mt-5 flex items-center justify-between gap-2 text-xs text-slate-400 sm:text-sm">
                        <span>
                            ⏱ {workout.duration} min
                        </span>

                        <span>
                            🔥 {workout.caloriesBurned} kcal
                        </span>

                        <span>
                            ⭐ {workout.rating}
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}