import Image from "next/image"

export default function Aboutus() {
    return (
        <section className="w-full bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.25fr_1fr] items-start">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xl font-semibold text-blue-900 border border-indigo-100">
                        About the College
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
                        Sumesh Foundation&apos;s Swarajya Varishtha Mahavidyalay, Bhakshi (Mulane)
                    </h1>
                    <p className="text-sm sm:text-base font-medium text-indigo-700">
                        Recognized by Government of Maharashtra · Affiliated to KKSU Ramtek
                    </p>
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                        Sumesh Foundation’s Swarajya Varishtha Mahavidyalay provides accessible, high-quality education to rural and
                        semi-rural communities in Baglan, Nashik. Recognized by the Government of Maharashtra and affiliated with KKSU,
                        the institution ensures academic authenticity and regulated educational standards.
                    </p>
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                        With a qualified faculty and value-driven environment, the college nurtures students aspiring for academics,
                        civil services, leadership, and public administration, encouraging both intellectual and personal growth.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        {["Rural & semi-rural empowerment", "Academic excellence", "Social leadership"].map((item, i) => (
                            <span key={i} className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="w-full">
                    <div className="relative w-full overflow-hidden rounded-2xl bg-slate-900/5 border border-slate-200 shadow-sm">
                        <Image
                            src="https://colleges-india.com/wp-content/uploads/2025/03/College-image.png"
                            alt=""
                            fill
                            className="object-cover"
                            unoptimized
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent px-5 py-4">
                            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-100">
                                Sumesh Foundation&apos;s
                            </p>
                            <p className="text-sm font-semibold text-slate-50">
                                Centre for value-based higher education in Baglan, Nashik
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
