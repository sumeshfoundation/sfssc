"use client"
import Image from "next/image"
import { useState } from "react"

export default function Hero() {
    const [error, setError] = useState(false)

    return (
        <section className="w-full h-[78vh] relative flex items-center justify-center bg-gray-100 overflow-hidden">
            {!error ? (
                <Image
                    src="/college/hero.jpeg"
                    alt="campus-hero"
                    fill
                    priority
                    onError={() => setError(true)}
                    className="object-cover object-center"
                    sizes="100vw"
                />
            ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-600 text-lg font-semibold">
                    Image unavailable
                </div>
            )}
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                    Welcome to Our College
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto leading-relaxed">
                    Empowering students through education, values, and excellence
                </p>
                <div className="mt-6 flex justify-center">
                    <button className="px-5 py-2.5 text-lg font-medium bg-white text-black rounded-lg hover:bg-gray-200 transition">
                        Explore
                    </button>
                </div>
            </div>
        </section>
    )
}
