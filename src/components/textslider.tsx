"use client";
import { useEffect, useState } from "react";

export default function TextSlider() {
    const messages = [
        "Welcome to SWARAJ SENIOR COLLEGE",
        "Recognised by Government of Maharashtra",
        "Empowering students for a successful future",
        "Admissions open for academic year",
        "Scholarship opportunities available"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-screen bg-[#E7F0FB] py-4 flex justify-center items-center ">
            <p className="text-[18px] font-semibold text-[#1F1B4D] whitespace-nowrap">
                {messages[index]}
            </p>
        </div>
    );
}
