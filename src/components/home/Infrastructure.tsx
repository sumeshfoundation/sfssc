import Image from "next/image"

const items = [
    { title: "Office", image: "/noimage.jpg" },
    { title: "Class Room", image: "/noimage.jpg" },
    { title: "Library", image: "/noimage.jpg" }
]

export default function Infrastructure() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-10 max-w-6xl mx-auto px-4 ">
            <h2 className="text-3xl font-semibold mb-8">Infrastructure and Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="w-full bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={600}
                            height={400}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-5 text-center text-lg font-medium">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
