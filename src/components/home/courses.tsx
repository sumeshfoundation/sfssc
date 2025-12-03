"use client"
import React, {JSX} from "react"
import Link from "next/link"
import { useMemo } from "react"
import { FiArrowRight, FiBookOpen } from "react-icons/fi"

type CourseType = "UG" | "Diploma" | string

interface Course {
    title: string
    slug: string
    type: CourseType
}

const COURSES: Course[] = [
    { title: "Bachelor of Arts (Civil Services)", slug: "ba-civil-services", type: "UG" },
    { title: "Bachelor of Business Administration", slug: "bba", type: "UG" },
    {
        title: "Diploma in Library & Information Science (Granthalaya Vartashastra)",
        slug: "diploma-library-information-science",
        type: "Diploma",
    },
]

function CourseCard({ course }: { course: Course }): JSX.Element {
    return (
        <Link
            href={`/courses/${course.slug}`}
            className="group w-full bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col
                 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl
                 focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label={`View details for ${course.title}`}
        >
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                    <FiBookOpen className="text-blue-600 w-5 h-5" />
                    <h3 className="text-lg md:text-xl font-semibold text-slate-800 leading-snug">
                        {course.title}
                    </h3>
                </div>

                {/* Type badge */}
                <span className="ml-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                                 bg-blue-50 text-blue-700 border border-blue-200">
          {course.type}
        </span>
            </div>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {course.type === "UG"
                    ? "Undergraduate programme focused on strong academic foundations and career preparation."
                    : "Shorter, skills-focused diploma designed for professional practice."}
            </p>

            <div className="mt-6 flex items-center justify-between">
        <span className="text-sm font-medium text-blue-600 underline underline-offset-2
                                 group-hover:decoration-2 group-hover:text-blue-700 transition">
          View Details
        </span>

                <FiArrowRight className="w-5 h-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
        </Link>
    )
}

export default function Courses(): JSX.Element {
    const courses = useMemo<Course[]>(() => COURSES, [])

    return (
        <section className="w-full flex flex-col items-center justify-center py-16 max-w-7xl mx-auto px-4">
            <header className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Courses We Offer</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-sm md:text-base leading-relaxed">
                    Explore our academic programmes designed to build strong career foundations, professional competency, and
                    personal development.
                </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {courses.length === 0 ? (
                    <div className="col-span-full text-center text-gray-500">No courses available at the moment.</div>
                ) : (
                    courses.map((item) => <CourseCard key={item.slug} course={item} />)
                )}
            </div>
        </section>
    )
}
