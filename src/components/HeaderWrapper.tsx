"use client";
import { useEffect, useState } from "react";
import TopMiniHeader from "@/components/TopMiniHeader";
import MainHeader from "@/components/MainHeader";
import SubHeader from "@/components/SubHeader";

export default function HeaderWrapper() {
    const [hideMini, setHideMini] = useState(false);

    useEffect(() => {
        let lastScroll = 0;
        const handleScroll = () => {
            const current = window.scrollY;
            setHideMini(current > lastScroll && current > 20);
            lastScroll = current;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed w-full top-0 z-50 transition-all duration-300 bg-white">
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out transform ${
                    hideMini ? "opacity-0 -translate-y-5 h-0" : "opacity-100 translate-y-0 h-auto"
                }`}
            >
                <TopMiniHeader />
                <MainHeader />
            </div>

            <SubHeader />
        </header>
    );
}
