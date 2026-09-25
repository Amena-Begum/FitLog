export default function Loading() {
    return (
        <main className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-5 py-16 sm:px-8 lg:px-10">
            <div className="text-center">

                <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-zinc-700 border-t-lime-400"></div>

                <h2 className="display-font mt-6 text-2xl font-bold uppercase">
                    Loading Workouts...
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                    Please wait while we load your workouts.
                </p>

            </div>
        </main>
    );
}