"use client"
import { FiCheckCircle, FiInfo, FiFileText, FiUser, FiShield } from "react-icons/fi"

export default function RTI() {
    return (
        <main className="min-h-screen bg-white pt-[90px] pb-20">
            <section className="bg-indigo-50 border-y border-indigo-200 py-10 px-4 sm:px-6 lg:px-10 text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-indigo-900">
                    Right to Information (RTI)
                </h1>
                <p className="text-sm sm:text-base text-indigo-700 mt-2">
                    Transparency • Public Access • Responsible Governance
                </p>
            </section>

            <section className="max-w-5xl mx-auto mt-14 px-4 sm:px-6 lg:px-10 space-y-12">

                <div className="p-6 bg-slate-50 border rounded-xl shadow-sm text-slate-700">
                    <p className="leading-relaxed text-sm sm:text-base">
                        At <span className="font-semibold text-indigo-900">SUMESH FOUNDATION SWARAJYA VARISHTHA MAHAVIDYALAY</span>,
                        Affiliated to Kavikulaguru Kalidas Sanskrit University & Recognized by Govt. of Maharashtra,
                        we uphold transparency and accountability through our commitment to the Right to Information (RTI) Act.
                        By ensuring that relevant information regarding our institutional policies, governance, and administrative
                        processes is accessible to students and the general public, we promote openness and trust within our community.
                    </p>
                </div>

                <div className="space-y-8">

                    <div className="flex gap-4 bg-white border rounded-xl shadow-sm p-5">
                        <FiShield className="text-indigo-700 min-w-[28px]" size={28}/>
                        <div>
                            <h2 className="text-xl font-semibold text-slate-800">Commitment to Transparency</h2>
                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                                We uphold transparency and accountability through strict adherence to the RTI Act.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 bg-white border rounded-xl shadow-sm p-5">
                        <FiInfo className="text-indigo-700 min-w-[28px]" size={28}/>
                        <div>
                            <h2 className="text-xl font-semibold text-slate-800">Ensuring Access to Information</h2>
                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                                All relevant public information related to administration, academic policies, and governance is made available upon request.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 bg-white border rounded-xl shadow-sm p-5">
                        <FiUser className="text-indigo-700 min-w-[28px]" size={28}/>
                        <div>
                            <h2 className="text-xl font-semibold text-slate-800">Designated RTI Officer</h2>
                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                                The college has an officially appointed RTI Officer who processes RTI requests and ensures timely responses.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 bg-white border rounded-xl shadow-sm p-5">
                        <FiFileText className="text-indigo-700 min-w-[28px]" size={28}/>
                        <div>
                            <h2 className="text-xl font-semibold text-slate-800">RTI Application Process</h2>
                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                                Any citizen can request information in writing as per the RTI Act. The request will be addressed within the legally prescribed timeframe.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 bg-white border rounded-xl shadow-sm p-5">
                        <FiCheckCircle className="text-indigo-700 min-w-[28px]" size={28}/>
                        <div>
                            <h2 className="text-xl font-semibold text-slate-800">Dedication to Ethical Governance</h2>
                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                                This reinforces our dedication to ethical governance,
                                fostering trust and ensuring alignment with institutional and legal expectations.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="p-6 bg-indigo-50 border border-indigo-200 rounded-xl shadow-sm">
                    <h2 className="text-xl font-semibold text-indigo-900 mb-2">
                        RTI Officer & Contact Information
                    </h2>
                    <p className="text-sm sm:text-base text-indigo-900 leading-relaxed">
                        For RTI inquiries, written requests may be submitted directly to the college administration office.<br/>
                        All RTI applications will be processed as per statutory provisions of the RTI Act.
                    </p>
                </div>

                <p className="text-center text-slate-600 text-xs sm:text-sm mt-10">
                    Empowering students, parents, and citizens with transparent institutional access.
                </p>

            </section>
        </main>
    )
}
