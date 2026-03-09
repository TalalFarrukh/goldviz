import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.goldviztravelsandtours.com/sitemap.xml",
    host: "https://www.goldviztravelsandtours.com",
  };
}
