"use client"
import Link from "next/link"

export default function DepartmentsPage() {
    return (
        <main className="min-h-screen bg-white pt-[90px] pb-20">
            <section className="bg-green-50 border-y border-green-200 py-10 text-center px-4 sm:px-6 lg:px-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-green-900">Departments</h1>
                <p className="text-sm sm:text-base text-green-700 mt-2">Academic Divisions & Programs</p>
            </section>

            <section className="max-w-6xl mx-auto mt-12 px-4 sm:px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {[
                    ["B.A. (Civil Services)", "/departments/compsci"],
                    ["BBA", "/departments/commerce"],
                    ["Diploma in Library & Information Science", "/departments/arts"],
                ].map(([label, href], i) => (
                    <Link key={i} href={href} className="p-6 border rounded-xl shadow-sm bg-slate-50 hover:bg-white hover:shadow-md transition text-slate-800">
                        <h2 className="font-semibold">{label}</h2>
                        <p className="text-xs text-slate-600 mt-1">Click to view more</p>
                    </Link>
                ))}

            </section>
        </main>
    )
}
