"use client";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-white to-slate-50 pt-[80px] pb-20">
            <section className="w-full bg-blue-50 border-y border-blue-200 py-12 px-4 sm:px-6 lg:px-10 text-center shadow-sm">
                <h1 className="text-4xl font-extrabold text-blue-900 tracking-wide">Contact Us</h1>
                <p className="text-base text-blue-700 mt-2 font-medium">
                    We are here to assist you — reach out anytime.
                </p>
            </section>

            <section className="max-w-6xl mx-auto mt-14 px-4 sm:px-6 lg:px-10">

                <div className="grid lg:grid-cols-2 gap-10">

                    <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-8 space-y-6">
                        <div>
                            <h2 className="text-lg font-semibold text-blue-900 uppercase tracking-wide">College Name</h2>
                            <p className="text-slate-700 leading-relaxed mt-2 text-base">
                                Sumesh Foundation’s<br />
                                Swarajya Varishtha Mahavidyalay, Bhakshi (Mulane)<br />
                                Taluka Baglan, District Nashik – 423301, Maharashtra
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-blue-900 uppercase tracking-wide">Principal Office Contact</h2>
                            <p className="text-slate-700 leading-relaxed mt-2 flex flex-col gap-1 text-base">
                                <span className="font-medium">📞 +91 9226983129</span>
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-blue-900 uppercase tracking-wide">Email</h2>
                            <p className="text-slate-700 mt-2 font-medium text-base">
                                ✉️ swarajya.srcollege@gmail.com
                            </p>
                        </div>
                    </div>

                    <div className="bg-blue-900 text-blue-50 rounded-2xl shadow-xl p-8 flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-semibold uppercase tracking-wider">Official Affiliation</h2>
                            <p className="mt-2 text-blue-100 text-base leading-relaxed">
                                Kavikulguru Kalidas Sanskrit University (KKSU), Ramtek
                            </p>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-xl font-semibold uppercase tracking-wider">Institution Codes</h2>
                            <div className="mt-2 space-y-2 text-base text-blue-100">
                                <p>College Code: <span className="font-bold text-white">1296</span></p>
                                <p>AISHE Code: <span className="font-bold text-white">C-68408</span></p>
                            </div>
                        </div>

                        <div className="mt-8 bg-blue-800 rounded-xl p-5 border border-blue-700">
                            <p className="text-sm uppercase tracking-wide text-blue-200 font-semibold">
                                Government Recognized · Academically Affiliated · Publicly Verified
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-14 text-center">
                    <p className="text-slate-600 text-sm sm:text-base font-medium">
                        Office Hours: Monday – Saturday · 10:00 AM to 5:30 PM
                    </p>
                </div>

            </section>
        </main>
    );
}
