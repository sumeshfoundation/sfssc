"use client"

export default function StudentCharter() {
    return (
        <main className="min-h-screen bg-white pt-[90px] pb-20">
            <section className="bg-emerald-50 py-10 border-y border-emerald-200 text-center px-4 sm:px-6 lg:px-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-emerald-900">Student Charter</h1>
                <p className="text-sm sm:text-base text-emerald-700 mt-2">Rights • Support • Student Responsibilities</p>
            </section>

            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 mt-14 space-y-10 text-slate-700 leading-relaxed">

                <div>
                    <h2 className="text-xl font-semibold text-slate-800 mb-2">Students Have the Right To:</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Access quality education</li>
                        <li>A discrimination-free learning environment</li>
                        <li>Respectful treatment by the faculty and staff</li>
                        <li>Confidentiality of academic and personal data</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-slate-800 mb-2">Students Are Expected To:</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Maintain academic integrity</li>
                        <li>Show respect to teachers, staff, and peers</li>
                        <li>Attend classes regularly and punctually</li>
                        <li>Follow campus rules and institutional regulations</li>
                    </ul>
                </div>
            </section>
        </main>
    )
}
