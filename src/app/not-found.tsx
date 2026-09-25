import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] items-center justify-center px-5 py-16">
            <div className="w-full max-w-xl rounded-2xl border border-zinc-800 bg-[#111827] px-6 py-16 text-center sm:px-10">

                <p className="text-7xl font-black text-lime-400">
                    404
                </p>

                <h1 className="display-font mt-6 text-3xl font-bold uppercase sm:text-4xl">
                    Workout Not Found
                </h1>

                <p className="mx-auto mt-4 max-w-md text-slate-400">
                    The workout or page you are looking for
                    doesn&apos;t exist or may have been moved.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-block cursor-pointer rounded-lg bg-lime-400 px-6 py-3 font-bold uppercase text-black transition hover:opacity-90"
                >
                    Back To Workouts
                </Link>

            </div>
        </main>
    );
}