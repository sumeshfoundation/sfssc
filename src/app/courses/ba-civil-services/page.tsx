"use client"

import React, {JSX} from "react";

const pdfUrl = "https://kksanskrituni.digitaluniversity.ac/WebFiles/B%20A%20Civil%20Service%20%20CBCS%202022-23%20Revise.pdf";

export default function BACivilServicesPage(): JSX.Element {
    return (
        <main className="min-h-screen bg-white text-slate-900 pt-[70px]">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <header className="mb-10">
                    <h1 className="text-4xl font-semibold text-blue-800">B.A. (Civil Services)</h1>
                    <p className="mt-2 text-base text-slate-600">Kavikulaguru Kalidas Sanskrit University (KKSU) — Comprehensive Curriculum Summary</p>
                </header>

                <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left column: overview cards */}
                    <aside className="space-y-6">
                        <div className="p-6 bg-white border border-slate-200 shadow-sm rounded-lg">
                            <h2 className="text-lg font-medium text-blue-900">Program at a glance</h2>
                            <dl className="mt-4 grid grid-cols-1 gap-2 text-sm text-slate-700">
                                <div className="flex justify-between">
                                    <dt className="font-semibold">Program</dt>
                                    <dd>B.A. (Civil Services)</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="font-semibold">System</dt>
                                    <dd>CBCS</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="font-semibold">Duration</dt>
                                    <dd>3 Years (6 Semesters)</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="font-semibold">Total Credits</dt>
                                    <dd>144</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="font-semibold">Total Marks</dt>
                                    <dd>3600</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="font-semibold">Eligibility</dt>
                                    <dd>10+2 (HSC or equivalent)</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="font-semibold">Medium</dt>
                                    <dd>English, Marathi, Sanskrit (Sanskrit only for Sanskrit courses)</dd>
                                </div>
                            </dl>

                            <div className="mt-6 flex gap-3">
                                <a
                                    href={pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-4 py-2 bg-blue-800 text-white rounded-md text-sm font-medium shadow hover:bg-blue-900"
                                >
                                    View Source PDF
                                </a>

                                <a
                                    href={pdfUrl}
                                    download
                                    className="inline-block px-4 py-2 border border-blue-800 text-blue-800 rounded-md text-sm font-medium hover:bg-blue-50"
                                >
                                    Download PDF
                                </a>
                            </div>
                        </div>

                        <div className="p-6 bg-white border border-slate-200 shadow-sm rounded-lg">
                            <h3 className="text-md font-medium text-blue-900">Quick links</h3>
                            <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                <li>
                                    <a href="#structure" className="text-blue-800 hover:underline">Course structure & subjects</a>
                                </li>
                                <li>
                                    <a href="#assessment" className="text-blue-800 hover:underline">Examination & assessment</a>
                                </li>
                                <li>
                                    <a href="#semesters" className="text-blue-800 hover:underline">Semester highlights</a>
                                </li>
                                <li>
                                    <a href="#takeaways" className="text-blue-800 hover:underline">Key takeaways</a>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 bg-white border border-slate-200 shadow-sm rounded-lg">
                            <h3 className="text-md font-medium text-blue-900">Elective rule</h3>
                            <p className="mt-2 text-sm text-slate-700">Students must choose <strong>two</strong> electives. <strong>Political Science</strong> and <strong>Public Administration</strong> <span className="font-semibold">cannot</span> be taken together.</p>
                        </div>
                    </aside>

                    {/* Right column: main content */}
                    <div className="lg:col-span-2 space-y-8">
                        <article id="structure" className="p-6 bg-white border border-slate-200 shadow-sm rounded-lg">
                            <h2 className="text-2xl font-semibold text-blue-800">Program Objective & Structure</h2>
                            <p className="mt-3 text-sm text-slate-700">This undergraduate degree integrates a standard B.A. education with structured preparation for competitive examinations (UPSC, MPSC). The curriculum balances General Studies, language skills, and traditional Sanskrit scholarship.</p>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium text-blue-800">Compulsory Core Courses</h3>
                                    <ul className="mt-2 text-sm list-disc list-inside text-slate-700">
                                        <li>Sanskrit</li>
                                        <li>English</li>
                                        <li>General Studies – I (UPSC GS I themes)</li>
                                        <li>General Studies – II (UPSC GS II/III/IV themes)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-medium text-blue-800">Electives & Additional Components</h3>
                                    <p className="mt-2 text-sm text-slate-700">Electives include History, Sociology, Political Science, Public Administration, Economics, Mathematics, Geography, Literature options (Sanskrit/Marathi/Pali/Prakrit), and NCC. Skill courses (CSAT) are taught every semester and 2-credit GECs are scheduled in Sem II, IV & VI (Yoga, Environmental Studies, Human Rights).</p>
                                </div>
                            </div>
                        </article>

                        <article id="assessment" className="p-6 bg-white border border-slate-200 shadow-sm rounded-lg">
                            <h2 className="text-2xl font-semibold text-blue-800">Examination & Assessment</h2>
                            <p className="mt-3 text-sm text-slate-700">Each subject is evaluated out of <strong>100 marks</strong>: 60 for university (theory) examination and 40 for internal assessment. The passing threshold is <strong>35 marks</strong> per subject.</p>

                            <div className="mt-4">
                                <h3 className="font-medium text-blue-800">Internship</h3>
                                <p className="mt-2 text-sm text-slate-700">A mandatory 4-week internship is required after Semester IV or Semester VI. Typical placement areas include Administrative Offices, NGOs, Local Government Bodies, and Educational Institutions.</p>
                            </div>
                        </article>

                        <article id="semesters" className="p-6 bg-white border border-slate-200 shadow-sm rounded-lg">
                            <h2 className="text-2xl font-semibold text-blue-800">Semester-wise Highlights</h2>

                            <div className="mt-4 space-y-4 text-slate-700">
                                <section>
                                    <h3 className="font-semibold text-blue-800">First Year — Sem I</h3>
                                    <p className="mt-1 text-sm">Sanskrit Vagvilasah (translation & grammar); English (grammar, comprehension, précis); GS-I: Introduction to Civil Services; GS-II: Indian Society. Electives examples: Ancient History, Physical Geography, Microeconomics.</p>
                                </section>

                                <section>
                                    <h3 className="font-semibold text-blue-800">First Year — Sem II</h3>
                                    <p className="mt-1 text-sm">Sanskrit Vagvilasah II; English (vocabulary, essay, elocution); GS-I: World Physical Geography; GS-II: Ethics & Internal Security. Elective examples: Medieval History, Human Geography, Macroeconomics.</p>
                                </section>

                                <section>
                                    <h3 className="font-semibold text-blue-800">Second Year — Sem III & IV</h3>
                                    <p className="mt-1 text-sm">Sanskrit (Laghusiddhanta Kaumudi); English (descriptive); GS-I: Agriculture & Food Security; GS-II: Polity & Constitution. Sem IV emphasizes Culture, Freedom Struggle, and Economic Planning.</p>
                                </section>

                                <section>
                                    <h3 className="font-semibold text-blue-800">Third Year — Sem V & VI</h3>
                                    <p className="mt-1 text-sm">Sem V: Development, IR, Science & Tech; Sem VI: World History, Ethics & Integrity, Probity in Governance. Sanskrit & advanced English skills continue across semesters.</p>
                                </section>
                            </div>
                        </article>

                        <article id="takeaways" className="p-6 bg-white border border-slate-200 shadow-sm rounded-lg">
                            <h2 className="text-2xl font-semibold text-blue-800">Key Takeaways for Students</h2>
                            <ul className="mt-3 list-disc list-inside text-sm text-slate-700 space-y-2">
                                <li><strong>Civil Services alignment:</strong> GS papers are mapped to UPSC prelims and mains to provide direct exam relevance.</li>
                                <li><strong>Communication:</strong> English training targets writing, précis, debates and interview skills.</li>
                                <li><strong>Holistic:</strong> Traditional Sanskrit studies are complemented by contemporary subjects and internships for applied learning.</li>
                            </ul>
                        </article>

                        <footer className="p-6 bg-white border border-slate-200 shadow-sm rounded-lg">
                            <p className="text-sm text-slate-600">Source: Official KKSU syllabus PDF. For full details and page-level reference, open the source PDF linked on this page.</p>
                        </footer>
                    </div>
                </section>
            </div>
        </main>
    );
}
