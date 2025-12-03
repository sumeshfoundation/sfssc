"use client"
import Image from "next/image"

export default function DLISPage() {
    return (
        <main className="min-h-screen bg-white pt-[90px] pb-20">

            <section className="bg-indigo-50 border-y border-indigo-200 py-10 text-center px-4 sm:px-6 lg:px-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-indigo-900">
                    Diploma in Library & Information Science
                </h1>
                <p className="text-sm sm:text-base text-indigo-700 mt-2">
                    Preparing professionals for knowledge management and archival systems
                </p>
            </section>

            <section className="max-w-6xl mx-auto mt-14 px-4 sm:px-6 lg:px-10 space-y-12 text-slate-700 text-sm sm:text-base leading-relaxed">

                <div>
                    <h2 className="text-xl font-semibold text-slate-800 mb-2">Program Overview</h2>
                    <p>
                        This diploma equips students with theoretical and practical knowledge associated with library
                        operations, cataloguing, indexing, archival management, database systems, and modern digital
                        information processes used in academic, public, and corporate libraries.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-slate-800 mb-2">Key Areas of Learning</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Library cataloguing systems</li>
                        <li>Library management software</li>
                        <li>Information classification methodologies</li>
                        <li>Archival documentation & preservation</li>
                        <li>Knowledge storage & retrieval</li>
                        <li>Digital library infrastructure</li>
                    </ul>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border shadow-sm bg-slate-50">
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">Career Opportunities</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Government & Public Libraries</li>
                            <li>University & Research Libraries</li>
                            <li>Digital Archives</li>
                            <li>Corporate Knowledge Departments</li>
                            <li>Educational Institutes</li>
                            <li>Documentation Centres</li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border shadow-sm bg-slate-50">
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">Skills Gained</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Information classification & indexing</li>
                            <li>Reference services & research support</li>
                            <li>Digital library software usage</li>
                            <li>Information archival & preservation</li>
                            <li>Database navigation & record management</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-slate-800 mb-2">Eligibility & Duration</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><span className="font-medium">Eligibility:</span> 12th pass or equivalent</li>
                        <li><span className="font-medium">Duration:</span> 1 year</li>
                        <li><span className="font-medium">Type:</span> Diploma Course</li>
                    </ul>
                </div>

                <div className="p-6 bg-indigo-50 border border-indigo-200 rounded-xl shadow-sm text-indigo-900">
                    <p>
                        For more details on admissions and syllabus structure,
                        contact the administration at <span className="font-semibold">info@sfssc.in</span>
                    </p>
                </div>
            </section>
        </main>
    )
}
