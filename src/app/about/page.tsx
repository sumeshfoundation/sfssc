"use client";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white pt-[80px] pb-20">
            <section className="w-full bg-indigo-50 border-y border-indigo-200 py-10 px-4 sm:px-6 lg:px-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-indigo-900 text-center">About the College</h1>
                <p className="text-center text-sm sm:text-base text-indigo-700 mt-2">
                    Detailed institutional overview, heritage, values, and academic mission
                </p>
            </section>

            <section className="max-w-6xl mx-auto mt-12 px-4 sm:px-6 lg:px-10 space-y-14">

                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">Institutional Identity</h2>
                        <p className="leading-relaxed text-slate-700 text-sm sm:text-base">
                            Sumesh Foundation’s Swarajya Varishtha Mahavidyalay, Bhakshi (Mulane), Taluka Baglan, District Nashik,
                            is an emerging rural-based higher education institution dedicated to expanding academic access to remote,
                            tribal, and economically underserved regions. The college operates with recognition from the Government
                            of Maharashtra and maintains formal academic affiliation to Kavikulguru Kalidas Sanskrit University
                            (KKSU), Ramtek, ensuring the authenticity of degrees and academic frameworks.
                        </p>
                    </div>
                    <div className="relative">
                        <Image
                            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
                            alt="Institution overview"
                            width={1200}
                            height={800}
                            className="rounded-xl object-cover w-full h-72 border"
                            unoptimized
                        />
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="relative order-2 lg:order-1">
                        <Image
                            src="https://images.unsplash.com/photo-1588075592446-24524bde5f38"
                            alt="Education vision"
                            width={1200}
                            height={800}
                            className="rounded-xl object-cover w-full h-72 border"
                            unoptimized
                        />
                    </div>
                    <div className="space-y-4 order-1 lg:order-2">
                        <h2 className="text-2xl font-semibold text-slate-800">Founding Vision</h2>
                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                            The college was established with the core belief that education should not be a privilege reserved
                            for urban centers. Many students in rural Maharashtra have the capacity and determination to excel
                            academically but lack access to quality institutions. The college addresses this gap by:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm sm:text-base">
                            <li>Offering affordable and accessible higher education</li>
                            <li>Creating pathways for government-sector careers</li>
                            <li>Supporting first-generation learners</li>
                            <li>Promoting equal academic opportunity</li>
                        </ul>
                    </div>
                </div>

                <div className="space-y-8">
                    <h2 className="text-2xl font-semibold text-slate-800">Academic Direction & Specialization</h2>
                    <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                        A distinctive feature of this institution is its focus on Civil Services and Administrative Studies.
                    </p>

                    <div className="grid lg:grid-cols-2 gap-10">
                        <div className="p-6 rounded-xl border shadow-sm bg-slate-50">
                            <h3 className="font-semibold text-slate-800 mb-2">B.A. (Civil Services)</h3>
                            <p className="text-slate-700 text-sm sm:text-base">Uniquely tailored for UPSC / MPSC examinations.</p>
                            <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-700 text-sm sm:text-base">
                                <li>Political Science</li>
                                <li>Governance</li>
                                <li>Administrative studies</li>
                                <li>Public policy</li>
                                <li>IKS (Indian Knowledge Systems)</li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border shadow-sm bg-slate-50">
                            <h3 className="font-semibold text-slate-800 mb-2">Diploma in Library & Information Science</h3>
                            <p className="text-slate-700 text-sm sm:text-base">Preparing students for knowledge system roles.</p>
                            <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-700 text-sm sm:text-base">
                                <li>Public libraries</li>
                                <li>Government archival departments</li>
                                <li>Corporate knowledge centers</li>
                                <li>Information logistics</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">Role in Rural Development</h2>
                        <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                            Many students come from farming and tribal backgrounds with limited access to urban academic spaces.
                        </p>
                        <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                            This institution enables careers in:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-slate-700 text-sm sm:text-base">
                            <li>Civil services</li>
                            <li>Police & revenue departments</li>
                            <li>Education sector</li>
                            <li>Government offices</li>
                            <li>Library & information management</li>
                            <li>Academic research</li>
                        </ul>
                    </div>
                    <div className="relative">
                        <Image
                            src="https://images.unsplash.com/photo-1605719124118-8d3090e57f19"
                            alt="Rural learning empowerment"
                            width={1200}
                            height={800}
                            className="rounded-xl object-cover w-full h-72 border"
                            unoptimized
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-slate-800">University & Regulatory Compliance</h2>
                    <div className="p-6 bg-indigo-50 border border-indigo-200 rounded-xl shadow-sm text-sm sm:text-base text-indigo-900 space-y-2">
                        <p>College Code: <span className="font-semibold">1296</span></p>
                        <p>AISHE Code: <span className="font-semibold">C-68408</span></p>
                        <p>KKSU Act 1997</p>
                        <p>Aligned with UGC Public Self-Disclosure Policy 2024</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-slate-800">Cultural & Educational Ethos</h2>
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                        Education here is not only for academic qualification — it is for social, ethical, and personal transformation.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {[
                            "Heritage & Indian Knowledge Systems",
                            "Community engagement",
                            "Leadership qualities",
                            "Moral and cultural values",
                            "Spiritual and personal development"
                        ].map((v, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 border border-slate-200 bg-white rounded-full text-xs sm:text-sm text-slate-700"
                            >
                                {v}
                            </span>
                        ))}
                    </div>
                </div>

            </section>
        </main>
    );
}
