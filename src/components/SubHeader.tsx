import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function SubHeader() {
    const [query, setQuery] = useState("");

    return (
        <div className="w-full bg-[#1E3A8A] border-b border-[#4D7CFE] shadow-[0_2px_4px_rgba(30,58,138,0.35)]">
            <div className="w-full flex justify-between items-center py-2 px-4 sm:px-6 lg:px-10">

                <div className="flex flex-wrap gap-5 text-[11px] sm:text-sm text-[#E4ECFF] font-medium tracking-wide">
                    <Link className="transition duration-200 hover:text-white hover:underline underline-offset-4" href="/">Home</Link>
                    <Link className="transition duration-200 hover:text-white hover:underline underline-offset-4" href="/departments">Departments</Link>
                    <Link className="transition duration-200 hover:text-white hover:underline underline-offset-4" href="/faculty">Faculty</Link>
                    <Link className="transition duration-200 hover:text-white hover:underline underline-offset-4" href="/events">Events</Link>
                    <Link className="transition duration-200 hover:text-white hover:underline underline-offset-4" href="/library">Library</Link>
                    <Link className="transition duration-200 hover:text-white hover:underline underline-offset-4" href="/placements">Placements</Link>
                </div>

                <div className="hidden sm:flex items-center bg-white rounded-full border border-[#4D7CFE] px-3 py-[2px]">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent outline-none text-xs text-black w-24 sm:w-32 lg:w-44"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="text-[#1E3A8A] font-bold text-sm">🔍</button>
                </div>
            </div>
        </div>
    );
}
