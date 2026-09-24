import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen px-6 py-12">
        <p className="mb-4 text-sm tracking-[0.2em] text-[var(--accent)]">
          WORKOUT LIBRARY
        </p>

        <h1 className="display-font max-w-4xl text-5xl font-bold uppercase leading-none md:text-7xl">
          Train with intent. Log every set.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
          FitLog is a dark, no-nonsense gym companion: pick a lift,
          lock it into today&apos;s plan, and watch the week&apos;s work
          add up.
        </p>

        <button className="mt-8 bg-[var(--accent)] px-6 py-3 font-bold uppercase text-black">
          Browse Workouts
        </button>
      </main>
    </>
  );
}