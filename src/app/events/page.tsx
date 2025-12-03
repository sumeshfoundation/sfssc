"use client"

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-white pt-[90px] pb-20">
            <section className="bg-purple-50 border-y border-purple-200 py-10 text-center px-4 sm:px-6 lg:px-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-purple-900">Events & Activities</h1>
                <p className="text-sm sm:text-base text-purple-700 mt-2">Academic Events • Cultural Festivals • Workshops</p>
            </section>

            <section className="max-w-6xl mx-auto mt-12 px-4 sm:px-6 lg:px-10 space-y-8">

                {[
                    {
                        title: "Orientation Program",
                        desc: "Welcoming first-year students and providing institutional guidance."
                    },
                    {
                        title: "Cultural Annual Fest",
                        desc: "A celebration of arts, creativity, and student talent."
                    },
                    {
                        title: "Civil Services Seminar",
                        desc: "Expert talks and preparation strategies for UPSC & MPSC."
                    },
                    {
                        title: "Library & Research Day",
                        desc: "Promoting research, knowledge management, and academic reading."
                    }
                ].map((e, i) => (
                    <div key={i} className="p-6 rounded-xl border bg-slate-50 shadow-sm">
                        <h2 className="font-semibold text-slate-800 text-lg">{e.title}</h2>
                        <p className="text-sm sm:text-base text-slate-700 mt-1">{e.desc}</p>
                    </div>
                ))}

            </section>
        </main>
    )
}
