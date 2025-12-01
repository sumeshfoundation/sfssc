import Image from "next/image";

export default function Aboutus() {
    return (
        <section className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-10">
            <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xl font-semibold text-blue-900 border border-indigo-100">
                        About the College
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                        Sumesh Foundation&apos;s Swarajya Varishtha Mahavidyalay, Bhakshi (Mulane)
                    </h1>
                    <p className="text-sm sm:text-base font-medium text-indigo-700">
                        Recognized by Government of Maharashtra · Affiliated to KKSU Ramtek
                    </p>
                    <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                        <p>
                            Sumesh Foundation’s Swarajya Varishtha Mahavidyalay, Bhakshi (Mulane) is a higher education institution
                            established with the vision of providing accessible, high-quality education to the rural and semi-rural
                            communities of Taluka Baglan, District Nashik. The college is recognized by the Government of Maharashtra
                            and affiliated with Kavikulguru Kalidas Sanskrit University (KKSU), Ramtek, ensuring academic credibility
                            and compliance with regulated educational standards.
                        </p>
                        <p>
                            The institution focuses on developing capable students who aspire to serve society through academics, civil
                            services, social leadership, and public administration. With a well-qualified set of lecturers and an
                            academically enriched environment, the college provides a supportive platform for both academic growth and
                            personality development.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                            Rural &amp; semi-rural empowerment
                        </span>
                        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                            Academic excellence
                        </span>
                        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                            Social leadership
                        </span>
                    </div>
                </div>
                <div className="w-full">
                    <div className="relative w-full overflow-hidden rounded-2xl bg-slate-900/5 border border-slate-200 shadow-sm">
                        <Image
                            src="https://colleges-india.com/wp-content/uploads/2025/03/College-image.png"
                            alt="Swarajya Varishtha Mahavidyalay campus"
                            width={900}
                            height={700}
                            className="w-full h-64 sm:h-72 lg:h-full object-cover"
                            unoptimized
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent px-5 py-4">
                            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-100">
                                Sumesh Foundation&apos;s
                            </p>
                            <p className="text-sm font-semibold text-slate-50">
                                A centre for inclusive and value-based higher education in Baglan, Nashik
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
