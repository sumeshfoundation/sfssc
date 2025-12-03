export default async function sitemap() {
    const date = new Date().toISOString()

    return [
        { url: "https://sfssc.in", lastModified: date, changeFrequency: "weekly", priority: 1.0 },

        { url: "https://sfssc.in/about", lastModified: date, changeFrequency: "weekly", priority: 0.9 },
        { url: "https://sfssc.in/faculty", lastModified: date, changeFrequency: "weekly", priority: 0.9 },
        { url: "https://sfssc.in/contact", lastModified: date, changeFrequency: "weekly", priority: 0.9 },
        { url: "https://sfssc.in/admissions", lastModified: date, changeFrequency: "weekly", priority: 0.9 },
        { url: "https://sfssc.in/departments", lastModified: date, changeFrequency: "weekly", priority: 0.9 },
        { url: "https://sfssc.in/events", lastModified: date, changeFrequency: "weekly", priority: 0.9 },

        { url: "https://sfssc.in/courses/ba-civil-services", lastModified: date, changeFrequency: "weekly", priority: 0.8 },
        { url: "https://sfssc.in/courses/bba", lastModified: date, changeFrequency: "weekly", priority: 0.8 },
        { url: "https://sfssc.in/courses/dlis", lastModified: date, changeFrequency: "weekly", priority: 0.8 },

        { url: "https://sfssc.in/policy/privacy", lastModified: date, changeFrequency: "weekly", priority: 0.7 },
        { url: "https://sfssc.in/policy/rules", lastModified: date, changeFrequency: "weekly", priority: 0.7 },
        { url: "https://sfssc.in/policy/rti", lastModified: date, changeFrequency: "weekly", priority: 0.7 },
        { url: "https://sfssc.in/policy/terms", lastModified: date, changeFrequency: "weekly", priority: 0.7 },
        { url: "https://sfssc.in/policy/conduct", lastModified: date, changeFrequency: "weekly", priority: 0.7 },
        { url: "https://sfssc.in/policy/antiragging", lastModified: date, changeFrequency: "weekly", priority: 0.7 },
        { url: "https://sfssc.in/policy/charter", lastModified: date, changeFrequency: "weekly", priority: 0.7 },
        { url: "https://sfssc.in/policy/complaints", lastModified: date, changeFrequency: "weekly", priority: 0.6 },
        { url: "https://sfssc.in/policy/posh", lastModified: date, changeFrequency: "weekly", priority: 0.6 },
    ]
}
