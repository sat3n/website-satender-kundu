import { getCollection } from "astro:content";
import { SITE } from "@/utils/constants";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const thoughts = (await getCollection("thoughts"))
    .filter((t) => !t.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const lines = [
    `# ${SITE.author}`,
    "",
    `> ${SITE.description}`,
    "",
    "## Thoughts",
    ...thoughts.map(
      (t) => `- [${t.data.title}](/thoughts/${t.id}): ${t.data.description}`
    ),
    "",
    "## Sections",
    "- [Library](/library): Books, articles, and papers curated by Satender Kundu",
    "- [About](/about): Background, credentials, and community involvement",
    "",
    "## Optional",
    "- [RSS Feed](/rss.xml): Subscribe to new thoughts",
    "- [Sitemap](/sitemap-index.xml): Full site map",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
