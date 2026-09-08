import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://jasa-website-termurah-didunia.vercel.app",
            lastModified: new Date(),
        },
        {
            url: "https://jasa-website-termurah-didunia.vercel.app/id",
            lastModified: new Date(),
        },
        {
            url: "https://jasa-website-termurah-didunia.vercel.app/en",
            lastModified: new Date(),
        },
    ];
}