"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function MainHeader() {
    const [query, setQuery] = useState("");

    return (
        <div className="relative w-full bg-gradient-to-r from-white via-[#FFF4FA] to-white overflow-hidden border-b border-[#FFC4DD] shadow-[0_2px_6px_rgba(255,182,212,0.35)]">

            <div className="absolute inset-0 bg-[radial-gradient(#FFCCE1_1px,transparent_1px)] [background-size:13px_13px] opacity-60 animate-[pulse_6s_ease-in-out_infinite]"></div>

            <div className="relative z-10 w-full flex items-center justify-between gap-4 py-3 px-2 sm:px-4 lg:px-10">

                <div className="flex items-center gap-3">
                    <Image src="/assets/logo/logo.png" alt="Left Logo" width={110} height={110} className="drop-shadow-md" />
                </div>

                <div className="flex flex-col items-center text-center leading-tight max-w-[70%]">
                    <span className="text-[15px] sm:text-[17px] font-semibold text-[#C22C69] tracking-wide uppercase">
                        SUMESH FOUNDATION
                    </span>

                    <span className="text-[22px] sm:text-[28px] font-extrabold text-[#262255] tracking-wide uppercase drop-shadow-sm">
                        SWARAJYA VARISHTHA MAHAVIDYALAY
                    </span>
                    <span className="text-[10px] sm:text-[15px] text-[#645F7A] font-medium mt-[3px]">
                        Bhashi (Mukhane), Taluka–Baglan, Nashik
                    </span>

                    <span className="text-[12px] sm:text-[18.5px] text-[#5A5770] font-medium tracking-wide mt-[2px] px-2 py-[2px] rounded bg-[#FFE5EF]/60">
                        Affiliated to Kavikulaguru Kalidas Sanskrit University & Recognized by Govt. of Maharashtra
                    </span>
                </div>

                <div>
                    <Image src="/assets/logo/img.png" alt="Right Logo" width={100} height={100} className="drop-shadow-md" />
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse {
                    0% { opacity: 0.45; }
                    50% { opacity: 0.8; }
                    100% { opacity: 0.45; }
                }
            `}</style>
        </div>
    );
}
