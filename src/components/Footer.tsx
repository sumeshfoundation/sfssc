import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-[#1E3A8A] text-white mt-20 border-t border-[#5B8BFF]">
            <div className="w-full px-6 lg:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="pr-6 flex flex-col gap-4">
                    <Image src="/assets/logo/logo.png" alt="College Logo" width={90} height={90} />
                    <p className="text-sm text-[#E4ECFF] leading-relaxed">Dedicated to educating students with excellence, integrity, and innovation.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#F0F6FF]">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link className="hover:text-[#D6E6FF]" href="/">Home</Link></li>
                        <li><Link className="hover:text-[#D6E6FF]" href="/about">About</Link></li>
                        <li><Link className="hover:text-[#D6E6FF]" href="/courses">Courses</Link></li>
                        <li><Link className="hover:text-[#D6E6FF]" href="/admissions">Admissions</Link></li>
                        <li><Link className="hover:text-[#D6E6FF]" href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#F0F6FF]">Departments</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link className="hover:text-[#D6E6FF]" href="/departments/compsci">BA (Civil Services)</Link></li>
                        <li><Link className="hover:text-[#D6E6FF]" href="/departments/commerce">BBA</Link></li>
                        <li><Link className="hover:text-[#D6E6FF]" href="/departments/arts">Diploma in Library & Information Science (Granthalaya Vartashastra)</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#F0F6FF]">Contact</h3>
                    <ul className="space-y-2 text-sm text-[#E4ECFF]">
                        <li>📍 Pune, Maharashtra, India</li>
                        <li>📞 +91 9876543210</li>
                        <li>📧 info@swarajcollege.edu</li>
                    </ul>
                </div>
            </div>
            <div className="w-full border-t border-[#5B8BFF] py-4 text-center text-sm text-[#D6E6FF]">
                © {new Date().getFullYear()} Swaraj College. All rights reserved.
            </div>
        </footer>
    );
}
