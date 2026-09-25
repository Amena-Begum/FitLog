import Image from "next/image";

export default function Footer() {
    return (
        <footer className="mt-auto border-t border-zinc-800 bg-[#0b1120]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">

                {/* Logo */}
                <div className="cursor-pointer flex items-center gap-2">
                    <div className="relative h-10 w-10">
                        <Image
                            src="/assets/logo.png"
                            alt="FitLog Logo"
                            fill
                            sizes="40px"
                            className="object-contain"
                        />
                    </div>

                    <span className="display-font text-2xl font-bold tracking-wide">
                        FITLOG
                    </span>
                </div>

                {/* Copyright */}
                <p className="text-sm text-slate-500">
                    © 2026 FitLog. All rights reserved.
                </p>

            </div>
        </footer>
    );
}