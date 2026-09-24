"use client";

import toast from "react-hot-toast";
import { Workout } from "../app/types/workout";
import { useWorkoutStore } from "../store/useWorkoutStore";

export default function WorkoutActions({
    workout,
}: {
    workout: Workout;
}) {
    const plan = useWorkoutStore((state) => state.plan);
    const saved = useWorkoutStore((state) => state.saved);

    const addToPlan = useWorkoutStore(
        (state) => state.addToPlan
    );

    const addToSaved = useWorkoutStore(
        (state) => state.addToSaved
    );

    const handleAddToPlan = () => {
        const alreadyExists = plan.some(
            (item) => item.id === workout.id
        );

        if (alreadyExists) {
            toast.error(
                "You already selected today's plan"
            );
            return;
        }

        addToPlan(workout);
        toast.success("Added to today's plan");
    };

    const handleSave = () => {
        const alreadyExists = saved.some(
            (item) => item.id === workout.id
        );

        if (alreadyExists) {
            toast.error("Already saved for later");
            return;
        }

        addToSaved(workout);
        toast.success("Saved for later");
    };

    return (
        <div className="mt-10 flex flex-wrap gap-4">

            {/* Add To Plan */}
            <button
                onClick={handleAddToPlan}
                className="cursor-pointer rounded-lg bg-lime-400 px-6 py-3 font-bold text-black transition hover:opacity-90"
            >
                Add To Today&apos;s Plan
            </button>

            {/* Save For Later */}
            <button
                onClick={handleSave}
                className="cursor-pointer rounded-lg border border-zinc-700 px-6 py-3 transition hover:border-lime-400 hover:text-lime-400"
            >
                Save For Later
            </button>

        </div>
    );
}