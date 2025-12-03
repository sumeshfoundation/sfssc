"use client"

export default function CodeOfConduct() {
    return (
        <main className="min-h-screen bg-white pt-[90px] pb-20">
            <section className="bg-indigo-50 py-10 border-y border-indigo-200 text-center px-4 sm:px-6 lg:px-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-indigo-900">Code of Conduct</h1>
                <p className="text-sm sm:text-base text-indigo-700 mt-2">Integrity • Respect • Professionalism</p>
            </section>

            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 mt-14 space-y-8 leading-relaxed text-slate-700">
                <ul className="list-disc pl-5 space-y-2">
                    <li>Respect for all individuals regardless of background or belief.</li>
                    <li>Zero tolerance for discrimination or bullying.</li>
                    <li>Responsible use of institutional property.</li>
                    <li>Ethical behavior inside and outside the campus.</li>
                </ul>
            </section>
        </main>
    )
}
