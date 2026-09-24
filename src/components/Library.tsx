import { getWorkouts } from "../app/library/api";
import LibraryContent from "./LibraryContent";

export default async function Library() {
    const workouts = await getWorkouts();

    return (
        <section
            id="library"
            className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10"
        >
            <LibraryContent workouts={workouts} />
        </section>
    );
}