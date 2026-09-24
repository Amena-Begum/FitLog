import { create } from "zustand";
import { Workout } from "../app/types/workout";

type WorkoutStore = {
    plan: Workout[];
    saved: Workout[];

    addToPlan: (workout: Workout) => void;
    addToSaved: (workout: Workout) => void;

    removeFromPlan: (id: number) => void;
    removeFromSaved: (id: number) => void;
};

export const useWorkoutStore = create<WorkoutStore>((set) => ({
    plan: [],
    saved: [],

    addToPlan: (workout) =>
        set((state) => {
            const exists = state.plan.some(
                (item) => item.id === workout.id
            );

            if (exists) {
                return state;
            }

            return {
                plan: [...state.plan, workout],
            };
        }),
    addToSaved: (workout) =>
        set((state) => {
            const exists = state.saved.some(
                (item) => item.id === workout.id
            );

            if (exists) {
                return state;
            }

            return {
                saved: [...state.saved, workout],
            };
        }),
    removeFromPlan: (id) =>
        set((state) => ({
            plan: state.plan.filter((item) => item.id !== id),
        })),

    removeFromSaved: (id) =>
        set((state) => ({
            saved: state.saved.filter((item) => item.id !== id),
        })),
}));