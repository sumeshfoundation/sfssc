import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import HeaderWrapper from "@/components/HeaderWrapper";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
    title: "Swarajya Varishtha Mahavidyalay - SUMESH FOUNDATION",
    description: "College Website sfssc.in – SUMESH FOUNDATION, SWARAJYA VARISHTHA MAHAVIDYALAY, Bhashi (Mukhane), Taluka-Baglan, Nashik. Affiliated to Kavikulaguru Kalidas Sanskrit University and Recognized by Government of Maharashtra."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} bg-white text-black antialiased`}>
        <HeaderWrapper />
        <div className="pt-[125px]">
            {children}
        </div>
        <Footer />
        </body>
        </html>
    );
}
