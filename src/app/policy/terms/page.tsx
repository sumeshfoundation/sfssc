"use client"

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-white pt-[90px] pb-20">
            <section className="bg-indigo-50 py-10 border-y border-indigo-200 text-center px-4 sm:px-6 lg:px-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-indigo-900">Terms of Service</h1>
                <p className="text-sm sm:text-base text-indigo-700 mt-2">Use of College Website & Digital Services</p>
            </section>

            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 mt-14 space-y-8 leading-relaxed text-slate-700">
                <p>
                    These Terms govern your interaction with
                    <span className="font-semibold text-indigo-900"> SUMESH FOUNDATION SWARAJYA VARISHTHA MAHAVIDYALAY </span>
                    website and digital systems. By visiting or interacting with this website, you agree to these terms.
                </p>

                <div>
                    <h2 className="text-xl font-semibold text-slate-800 mb-2">Acceptable Use</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Users must not attempt to hack, modify, or disrupt digital services.</li>
                        <li>Content may not be copied, redistributed, or misused without authorization.</li>
                        <li>Users must not engage in content scraping or automated data mining.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-slate-800 mb-2">Accuracy of Information</h2>
                    <p>
                        The institution strives to maintain accuracy, but we cannot guarantee completeness of content and data at all times.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-slate-800 mb-2">Modification of Terms</h2>
                    <p>
                        The institution reserves the right to revise these terms at any time without prior notice.
                    </p>
                </div>
            </section>
        </main>
    )
}
