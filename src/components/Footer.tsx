"use client"
import Link from "next/link"
import Image from "next/image"
import { FiMapPin, FiPhone, FiMail, FiChevronRight } from "react-icons/fi"

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="w-full bg-[#12285B] text-white border-t border-[#3E5AA4] mt-20">

            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                <div className="flex flex-col gap-5 pr-4">
                    <Image src="/assets/logo/logo.png" alt="" width={95} height={95} className="rounded-lg"/>
                    <p className="text-sm text-[#BFD3FF] leading-relaxed">
                        Empowering students with academic excellence, social values, and leadership for a progressive future.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-5 text-[#E7F0FF]">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        {[
                            ["Home", "/"],
                            ["About", "/about"],
                            ["Courses", "/courses"],
                            ["Admissions", "/admissions"],
                            ["Contact", "/contact"]
                        ].map(([label, href]) => (
                            <li key={label}>
                                <Link href={href} className="flex items-center gap-2 hover:text-[#FFFFFF] transition">
                                    <FiChevronRight size={14}/> {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-5 text-[#E7F0FF]">Policies & Governance</h3>
                    <ul className="space-y-2 text-sm">

                        <li><Link href="/policy/privacy" className="flex items-center gap-2 hover:text-white"><FiChevronRight size={14}/>Privacy Policy</Link></li>
                        <li><Link href="/policy/rules" className="flex items-center gap-2 hover:text-white"><FiChevronRight size={14}/>Rules & Regulations</Link></li>
                        <li><Link href="/policy/rti" className="flex items-center gap-2 hover:text-white"><FiChevronRight size={14}/>RTI</Link></li>
                        <li><Link href="/policy/terms" className="flex items-center gap-2 hover:text-white"><FiChevronRight size={14}/>Terms of Service</Link></li>
                        <li><Link href="/policy/conduct" className="flex items-center gap-2 hover:text-white"><FiChevronRight size={14}/>Code of Conduct</Link></li>
                        <li><Link href="/policy/antiragging" className="flex items-center gap-2 hover:text-white"><FiChevronRight size={14}/>Anti-Ragging Policy</Link></li>
                        <li><Link href="/policy/charter" className="flex items-center gap-2 hover:text-white"><FiChevronRight size={14}/>Student Charter</Link></li>
                        <li><Link href="/policy/complaints" className="flex items-center gap-2 hover:text-white"><FiChevronRight size={14}/>Complaints & Feedback</Link></li>
                        <li><Link href="/policy/posh" className="flex items-center gap-2 hover:text-white"><FiChevronRight size={14}/>POSH Policy</Link></li>

                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-5 text-[#E7F0FF]">Contact</h3>
                    <ul className="space-y-4 text-sm text-[#BFD3FF]">
                        <li className="flex items-start gap-2 leading-relaxed">
                            <FiMapPin size={17}/>
                            SUMESH FOUNDATIONS SWARAJYA VARISHTHA MAHAVIDYALAY,
                            Bhakshi (Mulane), Baglan, Nashik – 423301
                        </li>
                        <li className="flex items-center gap-2"><FiPhone size={16}/>+91 9226983129</li>
                        <li className="flex items-center gap-2"><FiMail size={16}/>info@sfssc.in</li>
                    </ul>
                </div>
            </div>

            <div className="w-full bg-[#0E1B41] border-t border-[#375698] py-5">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-[#AFC7F8]">
                    <p>© {year} sfssc.in. All rights reserved.</p>
                    <Link
                        href="https://kitstechsolutions.com/"
                        target="_blank"
                        className="mt-2 sm:mt-0 hover:text-white font-medium"
                    >
                        Developed by KITS Tech Solutions
                    </Link>
                </div>
            </div>
        </footer>
    )
}
