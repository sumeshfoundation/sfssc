"use client"
import Image from "next/image"

export default function BBAPage() {
    return (
        <main className="min-h-screen bg-white pt-[90px] pb-20">

            <section className="bg-indigo-50 border-y border-indigo-200 py-10 text-center px-4 sm:px-6 lg:px-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-indigo-900">
                    Bachelor of Business Administration (BBA)
                </h1>
                <p className="text-sm sm:text-base text-indigo-700 mt-2">
                    Building future business leaders with managerial excellence
                </p>
            </section>

            <section className="max-w-6xl mx-auto mt-14 px-4 sm:px-6 lg:px-10 space-y-14 text-slate-700 text-sm sm:text-base leading-relaxed">

                <div>
                    <h2 className="text-xl font-semibold text-slate-800 mb-2">Program Overview</h2>
                    <p>
                        The BBA program prepares students with foundational business knowledge, entrepreneurship skills,
                        leadership abilities, and management insights required for both corporate and administrative careers.
                        It enables students to develop expertise in marketing, finance, HR, business analytics, and operational management.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-slate-800 mb-2">Core Areas of Study</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Business administration & organizational behavior</li>
                        <li>Marketing principles & consumer understanding</li>
                        <li>Financial management & cost accounting</li>
                        <li>Human resource management</li>
                        <li>Entrepreneurship & startup development</li>
                        <li>Business communication & corporate ethics</li>
                    </ul>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">

                    <div className="p-6 rounded-xl border shadow-sm bg-slate-50">
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">Career Opportunities</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Business Manager / Team Lead</li>
                            <li>Marketing & Sales Executive</li>
                            <li>Financial Analyst</li>
                            <li>HR Recruiter / HR Coordinator</li>
                            <li>Business Development Officer</li>
                            <li>Operations & Project Supervisor</li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border shadow-sm bg-slate-50">
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">Skills Gained</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Leadership & people management</li>
                            <li>Analytical & strategic thinking</li>
                            <li>Marketing & negotiation skills</li>
                            <li>Financial decision-making</li>
                            <li>Communication & corporate etiquette</li>
                            <li>Team coordination & professional discipline</li>
                        </ul>
                    </div>

                </div>

                <div>
                    <h2 className="text-xl font-semibold text-slate-800 mb-2">Eligibility • Course Format</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><span className="font-medium">Eligibility:</span> 12th pass or equivalent from any stream</li>
                        <li><span className="font-medium">Duration:</span> 3 Years</li>
                        <li><span className="font-medium">Mode:</span> Full-time regular</li>
                    </ul>
                </div>

                <div className="p-6 bg-indigo-50 border border-indigo-200 rounded-xl shadow-sm text-indigo-900">
                    <p>
                        For curriculum details, placements, and admission support,
                        please contact: <span className="font-semibold">info@sfssc.in</span>
                    </p>
                </div>

            </section>
        </main>
    )
}
