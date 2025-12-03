"use client"
import Link from "next/link"

export default function AdmissionsPage() {
    return (
        <main className="min-h-screen bg-white pt-[90px] pb-20">
            <section className="bg-blue-50 border-y border-blue-200 py-10 text-center px-4 sm:px-6 lg:px-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">Admissions</h1>
                <p className="text-sm sm:text-base text-blue-700 mt-2">Your Pathway to Higher Education</p>
            </section>

            <section className="max-w-6xl mx-auto mt-12 px-4 sm:px-6 lg:px-10 space-y-10 text-slate-700 leading-relaxed">

                <div>
                    <h2 className="text-xl font-semibold text-slate-800 mb-2">Admission Eligibility</h2>
                    <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
                        <li>Students must have successfully completed previous academic requirements</li>
                        <li>Reservation policies apply as per Government norms</li>
                        <li>Required documents must be submitted during admission verification</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-slate-800 mb-2">Required Documents</h2>
                    <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
                        <li>Marksheet of previous qualification</li>
                        <li>Transfer Certificate (TC)</li>
                        <li>Aadhar Card / ID Proof</li>
                        <li>Passport size photographs</li>
                        <li>Caste certificate (if applicable)</li>
                    </ul>
                </div>

                <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 shadow-sm">
                    <p className="text-blue-900 font-medium text-sm sm:text-base">
                        For admission guidance or queries, please contact the campus office or email:
                        <span className="font-semibold"> info@sfssc.in</span>
                    </p>
                </div>

            </section>
        </main>
    )
}
