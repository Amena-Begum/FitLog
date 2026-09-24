import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Workout } from "../app/types/workout";

type WorkoutStore = {
    plan: Workout[];
    saved: Workout[];
    completed: number[];

    addToPlan: (workout: Workout) => void;
    addToSaved: (workout: Workout) => void;

    removeFromPlan: (id: number) => void;
    removeFromSaved: (id: number) => void;

    markAsDone: (id: number) => void;
};

export const useWorkoutStore = create<WorkoutStore>()(
    persist(
        (set) => ({
            plan: [],
            saved: [],
            completed: [],

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
                    plan: state.plan.filter(
                        (item) => item.id !== id
                    ),
                    completed: state.completed.filter(
                        (completedId) => completedId !== id
                    ),
                })),

            removeFromSaved: (id) =>
                set((state) => ({
                    saved: state.saved.filter(
                        (item) => item.id !== id
                    ),
                })),

            markAsDone: (id) =>
                set((state) => {
                    if (state.completed.includes(id)) {
                        return state;
                    }

                    return {
                        completed: [...state.completed, id],
                    };
                }),
        }),
        {
            name: "fitlog-storage",
        }
    )
);