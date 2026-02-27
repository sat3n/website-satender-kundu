import { SITE } from "./constants";

export function personJsonLd(socialLinks: { platform: string; url: string }[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.author,
    url: SITE.url,
    sameAs: socialLinks.map((l) => l.url),
  });
}

export function articleJsonLd(opts: {
  title: string;
  description: string;
  url: string;
  pubDate: Date;
  updatedDate?: Date;
}) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.pubDate.toISOString(),
    ...(opts.updatedDate && {
      dateModified: opts.updatedDate.toISOString(),
    }),
    author: {
      "@type": "Person",
      name: SITE.author,
      url: SITE.url,
    },
    mainEntityOfPage: opts.url,
  });
}

export function itemListJsonLd(opts: {
  name: string;
  description: string;
  items: { name: string; position: number }[];
}) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: opts.name,
    description: opts.description,
    itemListElement: opts.items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
    })),
  });
}
