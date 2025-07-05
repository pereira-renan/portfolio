export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://my-portfolio-pereira-renan.vercel.app/";

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
    showLink: true,
  },
  {
    label: "About",
    href: "/about",
    showLink: true,
  },
  {
    label: "Projects",
    href: "/projects",
    showLink: false,
  },
  {
    label: "Links",
    href: "/links",
    showLink: true,
  },
];

export const sitemap = async () => {
  const routes =
    NAV_LINKS.filter((route) => route.showLink).map((route) => ({
      url: `${BASE_URL}${route.href}`,
      lastModified: new Date().toISOString().split("T")[0],
    })) || [];

  return [...routes];
};

export default sitemap;
