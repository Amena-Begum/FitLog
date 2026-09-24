import Image from "next/image";
import banner from "../../public/assets/banner.png";

export default function Hero() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid items-center gap-8 rounded-xl bg-gradient-to-r from-[#090d18] to-[#1a2133] p-8 lg:grid-cols-2 lg:p-12">

                {/* Left */}
                <div>
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-lime-400">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="max-w-xl text-4xl font-black uppercase leading-[0.9] text-white md:text-5xl">
                        Train With Intent.
                        <br />
                        Log Every Set.
                    </h1>

                    <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    <a
                        href="#library"
                        className="mt-6 inline-flex rounded-md bg-lime-400 px-5 py-3 text-xs font-bold uppercase text-black transition hover:scale-105"
                    >
                        Browse Workouts
                    </a>
                </div>

                {/* Right */}
                <div className="flex justify-center lg:justify-end">
                    <Image
                        src={banner}
                        alt="Workout training illustration"
                        priority
                        width={420}
                        height={420}
                        className="h-auto w-full max-w-[380px] object-contain"
                    />
                </div>

            </div>
        </section>
    );
}