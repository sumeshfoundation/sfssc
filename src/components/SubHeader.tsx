import Link from "next/link";
import { useState } from "react";

export default function SubHeader() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");

    return (
        <>
            <div className="w-full bg-[#1E3A8A] border-b border-[#4D7CFE] shadow-[0_2px_4px_rgba(30,58,138,0.35)]">
                <div className="w-full flex justify-between items-center py-2 px-4 sm:px-6 lg:px-10">
                    <button onClick={() => setOpen(true)} className="sm:hidden text-white text-2xl">☰</button>

                    <div className="hidden sm:flex flex-wrap gap-5 text-sm text-[#E4ECFF] font-medium tracking-wide">
                        <Link href="/">Home</Link>
                        <Link href="/departments">Departments</Link>
                        <Link href="/faculty">Faculty</Link>
                        <Link href="/events">Events</Link>
                        <Link href="/library">Library</Link>
                        <Link href="/placements">Placements</Link>
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

            <div
                className={`fixed top-0 left-0 h-full w-72 bg-[#1E3A8A] z-50 transition-transform duration-300 ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex justify-between items-center p-4 border-b border-[#4D7CFE]">
                    <span className="text-white text-lg font-semibold">Menu</span>
                    <button onClick={() => setOpen(false)} className="text-white text-2xl">×</button>
                </div>

                <div className="flex items-center bg-white rounded-full border border-[#4D7CFE] mx-4 mt-4 px-3 py-[3px]">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent outline-none text-sm text-black w-full"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="text-[#1E3A8A] font-bold text-sm">🔍</button>
                </div>

                <div className="flex flex-col p-4 gap-4 text-[#E4ECFF] text-base font-medium mt-4">
                    <Link onClick={() => setOpen(false)} href="/">Home</Link>
                    <Link onClick={() => setOpen(false)} href="/departments">Departments</Link>
                    <Link onClick={() => setOpen(false)} href="/faculty">Faculty</Link>
                    <Link onClick={() => setOpen(false)} href="/events">Events</Link>
                    <Link onClick={() => setOpen(false)} href="/library">Library</Link>
                    <Link onClick={() => setOpen(false)} href="/placements">Placements</Link>
                </div>
            </div>

            {open && (
                <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
            )}
        </>
    );
}
