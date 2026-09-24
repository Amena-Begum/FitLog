"use client";

import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { Workout } from "../app/types/workout";
import { useWorkoutStore } from "../store/useWorkoutStore";

type Props = {
    workout: Workout;
};

export default function SavedWorkoutCard({
    workout,
}: Props) {
    const removeFromSaved = useWorkoutStore(
        (state) => state.removeFromSaved
    );

    const handleRemove = () => {
        removeFromSaved(workout.id);
        toast.success("Workout removed from saved");
    };

    return (
        <article className="overflow-hidden rounded-xl border border-zinc-800 bg-[#111827]">
            <div className="flex flex-col sm:flex-row">

                {/* Image */}
                <div className="relative h-48 w-full shrink-0 sm:h-52 sm:w-56">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 224px"
                    />
                </div>

                {/* Main Content */}
                <div className="flex flex-1 flex-col justify-center p-5">

                    <h3 className="text-xl font-bold uppercase">
                        {workout.name}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                        {workout.equipment}
                    </p>

                    {/* Stats */}
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400">
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

                {/* Right Side Actions */}
                <div className="flex shrink-0 flex-col justify-center gap-3 border-t border-zinc-800 p-5 sm:border-l sm:border-t-0">

                    {/* View Details */}
                    <Link
                        href={`/workout/${workout.id}`}
                        className="cursor-pointer rounded-lg border border-zinc-700 px-4 py-2 text-center text-sm font-bold transition hover:border-lime-400 hover:text-lime-400"
                    >
                        View Details
                    </Link>

                    {/* Remove */}
                    <button
                        onClick={handleRemove}
                        className="cursor-pointer rounded-lg border border-red-500/40 px-4 py-2 text-sm font-bold text-red-400 transition hover:bg-red-500/10"
                    >
                        ✕ Remove
                    </button>

                </div>

            </div>
        </article>
    );
}