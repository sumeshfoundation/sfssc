"use client"
import { useState } from "react"

const courses = [
    {
        title: "B.A. (Administrative Services)",
        eligibility: "12th Pass (Any Stream)",
        duration: "3 Years",
        medium: "Marathi",
        description: "A specialized degree focused on preparing students for MPSC/UPSC and administrative careers.",
        career: [
            "Class-1 & Class-2 Government Officer",
            "Administrative Services",
            "Public Policy Development",
            "Govt. Recruitment & Civil Services"
        ],
        highlights: [
            "UPSC/MPSC Foundation Preparation",
            "Officer Level Guidance",
            "Personality Development",
            "Spoken English & Interview Skills",
            "Government Exam Mentoring Sessions",
            "Current Affairs & GK Workshops"
        ],
        syllabus: [
            "Indian Constitution & Governance",
            "History, Geography, Economics",
            "Logical & Analytical Reasoning",
            "English & Communication Skills"
        ]
    },
    {
        title: "B.B.A (Bachelor of Business Administration)",
        eligibility: "12th Pass (Any Stream)",
        duration: "3 Years",
        medium: "Marathi/English",
        description: "A professional degree designed for careers in management, business enterprise and entrepreneurship.",
        career: [
            "Business Analyst",
            "Sales Manager",
            "HR Assistant",
            "Account Executive",
            "Corporate Management",
            "Entrepreneur / Start-up Founder"
        ],
        highlights: [
            "Multinational Corporate Career Training",
            "Industry Career Development",
            "Internship Opportunities",
            "Business Case Study Projects",
            "Presentation & Communication Training",
            "Real-Workplace Exposure"
        ],
        syllabus: [
            "Principles of Management",
            "Marketing & Sales",
            "Human Resource & Organizational Behaviour",
            "Business Economics & Finance"
        ]
    },
    {
        title: "D.Lib. (Diploma in Library Science & Information)",
        eligibility: "10th Pass (Any Stream)",
        duration: "2 Years",
        medium: "Marathi/English",
        description: "A diploma focused on library management, information cataloging, and knowledge archival.",
        career: [
            "Government Librarian",
            "Institutional & Office Librarian",
            "Data & Knowledge Indexing Operator",
            "Library Assistant in Schools/Colleges",
            "Digital Library Manager"
        ],
        highlights: [
            "Government & Semi-Government Job Opportunities",
            "Institutional Librarian Training",
            "Library Documentation & Cataloging Skills",
            "Academic & Public Library Experience"
        ],
        syllabus: [
            "Library Administration",
            "Information Source & Systems",
            "Classification & Cataloguing",
            "Digital Archiving & Data Handling"
        ]
    }
]

export default function CoursesPage() {
    const [selected, setSelected] = useState<number | null>(null)

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center px-4 py-10 pt-[110px]">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Available Courses</h1>
            <p className="text-gray-600 max-w-3xl text-center mb-10 text-sm md:text-base">
                Explore our academic programs designed to build professional skills, enhance knowledge and create strong career opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-7xl">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-transform duration-200 hover:-translate-y-1 rounded-xl p-6 cursor-pointer"
                        onClick={() => setSelected(selected === index ? null : index)}
                    >
                        <h2 className="text-xl font-semibold text-blue-700">{course.title}</h2>
                        <p className="text-gray-600 text-sm mt-2">{course.description}</p>

                        <div className="mt-3 text-sm text-gray-600 space-y-1">
                            <p><strong>Eligibility:</strong> {course.eligibility}</p>
                            <p><strong>Duration:</strong> {course.duration}</p>
                            <p><strong>Medium:</strong> {course.medium}</p>
                        </div>

                        {selected === index && (
                            <div className="mt-4 text-sm text-gray-700 bg-blue-50 p-4 rounded-lg border border-blue-200 space-y-4">
                                <div>
                                    <strong>Course Highlights:</strong>
                                    <ul className="list-disc pl-5 mt-1 space-y-1">
                                        {course.highlights.map((h, i) => (
                                            <li key={i}>{h}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <strong>Career Opportunities:</strong>
                                    <ul className="list-disc pl-5 mt-1 space-y-1">
                                        {course.career.map((c, i) => (
                                            <li key={i}>{c}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <strong>Key Syllabus Topics:</strong>
                                    <ul className="list-disc pl-5 mt-1 space-y-1">
                                        {course.syllabus.map((s, i) => (
                                            <li key={i}>{s}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="w-full max-w-4xl mt-14 bg-white border border-blue-200 shadow p-6 rounded-xl">
                <h2 className="text-xl font-bold text-blue-800 text-center mb-4">Admissions Open – Academic Year 2025–26</h2>

                <div className="text-gray-700 text-sm md:text-base">
                    <strong>Benefits & Facilities:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1 mb-5">
                        <li>Fee concessions for OBC/SC/ST/NT/SBC students</li>
                        <li>Access to Sumesh Central Library facility</li>
                        <li>Bus pass facility for students</li>
                        <li>Visits to various administrative offices</li>
                        <li>Annual educational tour</li>
                    </ul>

                    <strong>Contact Information:</strong>
                    <div className="mt-2 space-y-1">
                        <p>Prof. D. M. Suryawanshi – 9421754660</p>
                        <p>Prof. B. V. Rondhal – 8007373616</p>
                        <p>Prof. Madan Suryawanshi – 9284884956</p>
                    </div>

                    <p className="mt-5 font-semibold text-center text-blue-800">
                        Contact today and secure your son’s or daughter’s admission.
                    </p>
                </div>
            </div>
        </div>
    )
}
