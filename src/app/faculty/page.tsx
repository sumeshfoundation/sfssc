import Image from "next/image"

const principal = {
    name: "Shri. D. M. Suryawanshi",
    designation: "Principal",
    subject: "Politics & IKS",
    image: "/faculty/suryawanshi.png"
}

const faculty = [
    { name: "Prof. Sunita. B. Suryawanshi", designation: "Lecturer", subject: "Foundation-1 English", image: "/faculty/sunita.png" },
    { name: "Prof. K. S. Sonawane", designation: "Lecturer", subject: "Marathi & Foundation-2", image: "/faculty/kiran.png" },
    { name: "Prof. B. B. Rokade", designation: "Lecturer", subject: "Economics & C-SAT", image: "/faculty/ronadad.png" },
    { name: "Prof. R. R. Gayakwad", designation: "Lecturer", subject: "Marathi & Yoga", image: "/noimage.jpg" },
    { name: "Prof. J. D. Chaudhari", designation: "Lecturer", subject: "Geography", image: "/noimage.jpg" },
    { name: "Prof. M. N. Vayawale", designation: "Lecturer", subject: "Geography", image: "/noimage.jpg" }
]

export default function FacultyPage() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 bg-white pt-[110px] pb-20">

            <h2 className="text-4xl font-semibold text-[#003E8A] text-center mb-12">College Faculty</h2>

            <div className="bg-white border border-[#C8D6EA] shadow-xl rounded-2xl p-10 mb-16 flex flex-col items-center">
                <Image
                    src={principal.image}
                    alt={principal.name}
                    width={260}
                    height={260}
                    className="w-52 h-52 rounded-full object-cover border-4 border-[#DAE6FF]"
                />

                <div className="mt-6 text-center space-y-1">
                    <div className="text-3xl font-bold text-[#0C2A52]">{principal.name}</div>
                    <div className="text-xl font-semibold text-[#003E8A]">{principal.designation}</div>
                    <div className="text-lg text-gray-700">{principal.subject}</div>
                </div>
            </div>

            <div className="text-2xl font-semibold text-[#003E8A] border-b border-[#DCE3F2] pb-2 mb-8">
                Teaching Staff
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {faculty.map((f, i) => (
                    <div
                        key={i}
                        className="w-full bg-white border border-[#D0E4FF] shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    >
                        <Image
                            src={f.image}
                            alt={f.name}
                            width={180}
                            height={180}
                            className="w-32 h-32 rounded-full object-cover border-4 border-[#E5EEFF]"
                        />
                        <div className="mt-4 text-lg font-semibold text-[#0C2A52] text-center">{f.name}</div>
                        <div className="mt-1 text-sm text-[#003E8A] font-medium text-center">{f.designation}</div>
                        <div className="mt-1 text-sm text-gray-700 text-center">{f.subject}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
