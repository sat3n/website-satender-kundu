export const SITE = {
  title: "Satender Kundu",
  description:
    "Personal website of Satender Kundu — thoughts, reading library, credentials, and community involvement.",
  url: "https://satenderkundu.com",
  author: "Satender Kundu",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Thoughts", href: "/thoughts" },
  { label: "Library", href: "/library" },
  { label: "About", href: "/about" },
] as const;
