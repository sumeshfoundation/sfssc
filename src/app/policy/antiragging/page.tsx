"use client"

export default function AntiRaggingPolicy() {
    return (
        <main className="min-h-screen bg-white pt-[90px] pb-20">
            <section className="bg-red-50 py-10 border-y border-red-200 text-center px-4 sm:px-6 lg:px-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-red-900">Anti-Ragging Policy</h1>
                <p className="text-sm sm:text-base text-red-700 mt-2">Zero Tolerance for Harassment & Bullying</p>
            </section>

            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 mt-14 space-y-8 text-slate-700 leading-relaxed">
                <ul className="list-disc pl-5 space-y-2">
                    <li>Ragging in any form is strictly prohibited on and off campus.</li>
                    <li>Harassment, intimidation, or humiliation of students is punishable by law.</li>
                    <li>Offenders are subject to suspension, expulsion, or legal action.</li>
                    <li>Victims may report incidents in full confidentiality.</li>
                </ul>
            </section>
        </main>
    )
}
