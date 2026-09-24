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
        <Link href={`/workout/${workout.id}`}>
            <article className="overflow-hidden rounded-xl border border-zinc-800 bg-[#111827] transition hover:-translate-y-1 hover:border-lime-400">
                <div className="relative h-56">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="p-4">
                    {/* Tags */}
                    <div className="mb-3 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((group) => (
                            <span
                                key={group}
                                className="rounded-full bg-lime-400/10 px-3 py-1 text-xs font-semibold text-lime-400"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-lg font-bold uppercase">
                        {workout.name}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                        {workout.equipment}
                    </p>

                    <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
                        <span>⏱ {workout.duration} min</span>
                        <span>🔥 {workout.caloriesBurned} kcal</span>
                        <span>⭐ {workout.rating}</span>
                    </div>
                </div>
            </article>
        </Link>
    );
}