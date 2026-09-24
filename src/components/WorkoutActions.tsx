"use client";

import toast from "react-hot-toast";
import { Workout } from "../app/types/workout";
import { useWorkoutStore } from "../store/useWorkoutStore";

export default function WorkoutActions({
  workout,
}: {
  workout: Workout;
}) {
  const addToPlan = useWorkoutStore(
    (state) => state.addToPlan
  );

  const addToSaved = useWorkoutStore(
    (state) => state.addToSaved
  );

  return (
    <div className="mt-10 flex gap-4">
      <button
        onClick={() => {
          addToPlan(workout);
          toast.success("Added to today's plan");
        }}
        className="rounded-lg bg-lime-400 px-6 py-3 font-bold text-black"
      >
        Add To Today&apos;s Plan
      </button>

      <button
        onClick={() => {
          addToSaved(workout);
          toast.success("Saved for later");
        }}
        className="rounded-lg border border-zinc-700 px-6 py-3"
      >
        Save For Later
      </button>
    </div>
  );
}