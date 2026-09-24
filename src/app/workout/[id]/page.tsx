import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkouts } from "../../library/api";
import WorkoutActions from "../../../components/WorkoutActions";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function WorkoutDetails({
    params,
}: Props) {
    const { id } = await params;

    const workouts = await getWorkouts();

    const workout = workouts.find(
        (item) => item.id === Number(id)
    );

    if (!workout) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

                {/* Left - Image */}
                <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-[#111827]">
                    <div className="relative aspect-square">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/* Right - Details */}
                <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {workout.muscleGroups.map((group) => (
                            <span
                                key={group}
                                className="rounded-full bg-lime-400/10 px-3 py-1 text-xs font-bold uppercase text-lime-400"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className="display-font mt-5 text-5xl font-bold uppercase leading-none sm:text-6xl">
                        {workout.name}
                    </h1>

                    {/* Description */}
                    <p className="mt-6 leading-7 text-slate-400">
                        {workout.description}
                    </p>

                    {/* Key Specs */}
                    <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800">
                        <div className="grid grid-cols-2">
                            <div className="border-b border-r border-zinc-800 p-4">
                                <p className="text-xs font-bold uppercase text-slate-500">
                                    Equipment
                                </p>
                                <p className="mt-1 font-semibold">
                                    {workout.equipment}
                                </p>
                            </div>

                            <div className="border-b border-zinc-800 p-4">
                                <p className="text-xs font-bold uppercase text-slate-500">
                                    Difficulty
                                </p>
                                <p className="mt-1 font-semibold">
                                    {workout.difficulty}
                                </p>
                            </div>

                            <div className="border-b border-r border-zinc-800 p-4">
                                <p className="text-xs font-bold uppercase text-slate-500">
                                    Sets
                                </p>
                                <p className="mt-1 font-semibold">
                                    {workout.sets}
                                </p>
                            </div>

                            <div className="border-b border-zinc-800 p-4">
                                <p className="text-xs font-bold uppercase text-slate-500">
                                    Reps
                                </p>
                                <p className="mt-1 font-semibold">
                                    {workout.reps}
                                </p>
                            </div>

                            <div className="border-r border-zinc-800 p-4">
                                <p className="text-xs font-bold uppercase text-slate-500">
                                    Duration
                                </p>
                                <p className="mt-1 font-semibold">
                                    {workout.duration} min
                                </p>
                            </div>

                            <div className="p-4">
                                <p className="text-xs font-bold uppercase text-slate-500">
                                    Calories
                                </p>
                                <p className="mt-1 font-semibold">
                                    {workout.caloriesBurned} kcal
                                </p>
                            </div>
                        </div>

                        <div className="border-t border-zinc-800 p-4">
                            <p className="text-xs font-bold uppercase text-slate-500">
                                Rating
                            </p>
                            <p className="mt-1 font-semibold">
                                ⭐ {workout.rating}
                            </p>
                        </div>
                    </div>

                    {/* Instructions */}
                    <div className="mt-10">
                        <h2 className="display-font text-3xl font-bold uppercase">
                            Instructions
                        </h2>

                        <ol className="mt-5 space-y-4">
                            {workout.instructions.map(
                                (instruction, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-4"
                                    >
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-400 text-sm font-black text-black">
                                            {index + 1}
                                        </span>

                                        <p className="pt-1 text-sm leading-6 text-slate-400">
                                            {instruction}
                                        </p>
                                    </li>
                                )
                            )}
                        </ol>
                    </div>

                    {/* Actions */}
                    <WorkoutActions workout={workout} />
                </div>
            </div>
        </main>
    );
}