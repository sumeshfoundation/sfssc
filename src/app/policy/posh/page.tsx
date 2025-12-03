"use client"

export default function POSHPolicy() {
    return (
        <main className="min-h-screen bg-white pt-[90px] pb-20">
            <section className="bg-pink-50 py-10 border-y border-pink-200 text-center px-4 sm:px-6 lg:px-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-pink-900">Sexual Harassment Prevention (POSH)</h1>
                <p className="text-sm sm:text-base text-pink-700 mt-2">Safety • Equality • Respect</p>
            </section>

            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 mt-14 space-y-10 text-slate-700 leading-relaxed">

                <p>
                    The college maintains a strict zero-tolerance policy towards sexual harassment,
                    discrimination, and gender-based misconduct.
                </p>

                <div>
                    <h2 className="text-xl font-semibold text-slate-800 mb-2">Prohibited Behaviors Include:</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Unwelcome physical contact</li>
                        <li>Sexually suggestive comments or jokes</li>
                        <li>Display of explicit or inappropriate content</li>
                        <li>Pressure for sexual favors</li>
                        <li>Gender-based discrimination or intimidation</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-slate-800 mb-2">Complaints & Safety Reporting</h2>
                    <p>
                        Any student may lodge a complaint in confidence. All submissions are handled sensitively and discreetly by the Internal Complaints Committee (ICC).
                    </p>
                </div>
            </section>
        </main>
    )
}
