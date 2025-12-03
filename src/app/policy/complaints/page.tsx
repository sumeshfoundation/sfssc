"use client"
import { useState } from "react"

export default function ComplaintsFeedback() {
    const [msg, setMsg] = useState("")
    const [email, setEmail] = useState("")

    return (
        <main className="min-h-screen bg-white pt-[90px] pb-20">
            <section className="bg-yellow-50 py-10 border-y border-yellow-200 text-center px-4 sm:px-6 lg:px-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-yellow-800">Complaints & Feedback</h1>
                <p className="text-sm sm:text-base text-yellow-700 mt-2">Confidential • Transparent • Responsible Handling</p>
            </section>

            <section className="max-w-xl mx-auto px-4 sm:px-6 lg:px-10 mt-14 space-y-6">

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    Submit complaints, suggestions, or feedback. All submissions are reviewed by the administration team confidentially.
                </p>

                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    placeholder="Your email (optional)"
                    className="w-full border p-3 rounded-lg text-sm sm:text-base"
                />

                <textarea
                    value={msg}
                    onChange={e => setMsg(e.target.value)}
                    placeholder="Write your complaint or feedback..."
                    className="w-full border p-3 h-32 rounded-lg text-sm sm:text-base"
                />

                <button className="bg-yellow-600 text-white px-5 py-2 rounded-lg text-sm sm:text-base font-semibold hover:bg-yellow-700">
                    Submit
                </button>
            </section>
        </main>
    )
}
