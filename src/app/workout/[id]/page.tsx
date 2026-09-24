import Image from "next/image";
import { getWorkoutById } from "../../library/api";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function WorkoutDetails({
    params,
}: Props) {
    const { id } = await params;

    const workout = await getWorkoutById(id);

    return (
        <section className="mx-auto max-w-7xl px-5 py-12">
            <div className="grid gap-10 lg:grid-cols-2">

                {/* Image */}
                <div className="relative h-[500px] overflow-hidden rounded-2xl">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div>
                    <h1 className="text-4xl font-black uppercase">
                        {workout.name}
                    </h1>

                    <p className="mt-4 text-slate-400">
                        {workout.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((group) => (
                            <span
                                key={group}
                                className="rounded-full bg-lime-400/10 px-3 py-1 text-sm text-lime-400"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    {/* Specs */}
                    <div className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-zinc-800 p-5">
                        <Spec label="Equipment" value={workout.equipment} />
                        <Spec label="Difficulty" value={workout.difficulty} />
                        <Spec label="Sets" value={workout.sets} />
                        <Spec label="Reps" value={workout.reps} />
                        <Spec label="Duration" value={`${workout.duration} min`} />
                        <Spec label="Calories" value={`${workout.caloriesBurned} kcal`} />
                        <Spec label="Rating" value={workout.rating} />
                    </div>

                    {/* Instructions */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-bold">
                            Instructions
                        </h2>

                        <ol className="mt-4 space-y-3">
                            {workout.instructions.map((step, index) => (
                                <li key={index}>
                                    <span className="mr-2 font-bold text-lime-400">
                                        {index + 1}.
                                    </span>
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Buttons */}
                    <div className="mt-10 flex gap-4">
                        <button className="rounded-lg bg-lime-400 px-6 py-3 font-bold text-black">
                            Add To Today&apos;s Plan
                        </button>

                        <button className="rounded-lg border border-zinc-700 px-6 py-3">
                            Save For Later
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Spec({
    label,
    value,
}: {
    label: string;
    value: string | number;
}) {
    return (
        <div>
            <p className="text-xs uppercase text-slate-500">
                {label}
            </p>

            <p className="font-semibold">
                {value}
            </p>
        </div>
    );
}