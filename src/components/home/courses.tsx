"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

const courses = [
    { title: "Bachelor of Arts (Civil Services)", slug: "ba-civil-services", type: "UG" },
    { title: "Bachelor of Business Administration", slug: "bba", type: "UG" },
    { title: "Diploma in Library & Information Science (Granthalaya Vartashastra)", slug: "diploma-library-information-science", type: "Diploma" }
]

export default function Courses() {
    const router = useRouter()

    return (
        <div className="w-full flex flex-col items-center justify-center py-10 max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-4">Courses we Offer</h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl text-sm md:text-base">
                Explore our academic programs designed to build strong career foundations, professional competency and personal development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {courses.map((item, i) => (
                    <Link
                        key={i}
                        href={`/courses/${item.slug}`}
                        className="w-full bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 p-6 text-lg font-medium cursor-pointer flex flex-col hover:-translate-y-1"
                    >
                        <span className="text-blue-700 font-semibold">{item.title}</span>
                        <span className="mt-2 text-sm font-normal bg-gray-100 px-2 py-1 rounded-md w-fit">Course Type: {item.type}</span>
                        <span className="mt-4 text-sm text-blue-600 underline">View Details</span>
                    </Link>
                ))}
            </div>

            <div className="mt-10 flex flex-col items-center">
                <p className="text-gray-700 text-sm md:text-base mb-4">Have a question or want to apply?</p>
                <button
                    onClick={() => router.push("/contact")}
                    className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-lg text-sm md:text-base"
                >
                    Inquire Now
                </button>
            </div>
        </div>
    )
}
