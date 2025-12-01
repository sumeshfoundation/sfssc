export default async function sitemap() {
    return [
        {
            url: "https://sfssc.in",
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: "https://sfssc.in/about",
            lastModified: new Date().toISOString(),
            changeFrequency: "yearly",
            priority: 0.9,
        },
    ];
}
