"use client"
import Image from "next/image"
import { useMemo, useState } from "react"

const principal = {
    name: "Shri. D. M. Suryawanshi",
    designation: "Principal",
    subject: "Politics & IKS",
    image: "/faculty/suryawanshi.png",
    quote: "Lead by example, learn with humility, teach with heart."
}

const faculty = [
    { name: "Prof. Sunita. B. Suryawanshi", designation: "Lecturer", subject: "Foundation-1 English", image: "/faculty/sunita.png", quote: "Curiosity is the engine of achievement." },
    { name: "Prof. K. S. Sonawane", designation: "Lecturer", subject: "Marathi & Foundation-2", image: "/faculty/kiran.png", quote: "Language opens doors to people and ideas." },
    { name: "Prof. B. B. Rokade", designation: "Lecturer", subject: "Economics & C-SAT", image: "/faculty/ronadad.png", quote: "Think clearly, act responsibly." },
    { name: "Prof. R. R. Gayakwad", designation: "Lecturer", subject: "Marathi & Yoga", image: "/noimage.jpg", quote: "Balance the mind, empower the body." },
    { name: "Prof. J. D. Chaudhari", designation: "Lecturer", subject: "Geography", image: "/noimage.jpg", quote: "Map the world, find your place." },
    { name: "Prof. M. N. Vayawale", designation: "Lecturer", subject: "Geography", image: "/noimage.jpg", quote: "Teach with maps, inspire with stories." }
]

export default function Faculty() {
    const [query, setQuery] = useState("")

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase()
        if (!q) return faculty
        return faculty.filter(f =>
            (f.name + " " + f.designation + " " + f.subject + " " + f.quote)
                .toLowerCase()
                .includes(q)
        )
    }, [query])

    return (
        <div className="w-full max-w-7xl mx-auto px-6 bg-white pt-[60px] pb-28">
            <header className="bg-gradient-to-r from-[#0C2A52] to-[#003E8A] rounded-3xl p-10 shadow-2xl text-white mb-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-none">
                        <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-xl">
                            <Image src={principal.image || "/noimage.jpg"} alt={principal.name} fill className="object-cover" />
                        </div>
                    </div>

                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-4xl font-extrabold">Inspiration & Faculty Stories</h1>
                        <p className="mt-2 text-lg max-w-2xl">Short quotes, career sparks and teaching philosophies from our faculty — a place to get inspired and find direction.</p>
                        <div className="mt-6 inline-flex items-center gap-4">
                            <div className="text-sm bg-white/10 px-4 py-2 rounded-full">{principal.name} — {principal.designation}</div>
                            <div className="text-sm bg-white/10 px-4 py-2 rounded-full">{principal.subject}</div>
                        </div>
                    </div>

                    <div className="flex-none mt-4 lg:mt-0">
                        <div className="bg-white rounded-2xl p-4 text-[#0C2A52] shadow-inner max-w-xs">
                            <div className="text-sm font-semibold">Principal's Thought</div>
                            <div className="mt-2 text-sm">{principal.quote}</div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="mb-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <h2 className="text-2xl font-semibold text-[#003E8A]">Faculty Inspirations</h2>

                    <div className="w-full sm:w-auto mt-2 sm:mt-0">
                        <label htmlFor="faculty-search" className="sr-only">Search faculty</label>
                        <div className="relative">
                            <input
                                id="faculty-search"
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search by name, subject, designation or quote..."
                                className="w-full sm:w-[360px] border border-[#E6F0FF] rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#003E8A]"
                                aria-label="Search faculty"
                            />
                            {query && (
                                <button
                                    onClick={() => setQuery("")}
                                    aria-label="Clear search"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-sm bg-[#003E8A] text-white px-3 py-1 rounded-full"
                                >
                                    Clear
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.length === 0 ? (
                        <div className="col-span-full text-center text-gray-500 py-12 bg-white border border-[#E6F0FF] rounded-3xl">
                            No faculty found for "<span className="font-medium text-[#0C2A52]">{query}</span>". Try another search.
                        </div>
                    ) : (
                        filtered.map((f) => (
                            <article key={f.name} className="bg-white border border-[#E6F0FF] rounded-3xl p-6 shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-1">
                                <div className="flex items-center gap-4">
                                    <div className="w-20 h-20 relative rounded-full overflow-hidden flex-none">
                                        <Image src={f.image || "/noimage.jpg"} alt={f.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-semibold text-[#0C2A52]">{f.name}</div>
                                        <div className="text-sm text-[#003E8A] font-medium">{f.designation} • {f.subject}</div>
                                    </div>
                                </div>

                                <blockquote className="mt-4 text-gray-700 italic">“{f.quote}”</blockquote>

                                <div className="mt-4 flex items-center justify-between">
                                    <div className="text-sm text-gray-500">Read more</div>
                                    <button
                                        className="text-sm bg-[#003E8A] text-white px-3 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0C2A52]"
                                        aria-label={`Connect with ${f.name}`}
                                        onClick={() => {
                                            // TODO: handle connect action, e.g., open modal or mailto
                                            console.log("Connect clicked:", f.name)
                                        }}
                                    >
                                        Connect
                                    </button>
                                </div>
                            </article>
                        ))
                    )}
                </div>
            </section>
        </div>
    )
}
