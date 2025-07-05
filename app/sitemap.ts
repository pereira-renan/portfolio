import { NAV_LINKS } from "@/components/layout/header";

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://my-portfolio-pereira-renan.vercel.app/";

export const sitemap = async () => {
  let routes = NAV_LINKS.filter((route) => route.showLink).map((route) => ({
    url: `${BASE_URL}${route.href}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
};
