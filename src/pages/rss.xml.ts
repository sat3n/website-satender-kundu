import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@/utils/constants";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const thoughts = (await getCollection("thoughts"))
    .filter((t) => !t.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: `${SITE.title}'s Thoughts`,
    description: SITE.description,
    site: context.site!.href,
    items: thoughts.map((thought) => ({
      title: thought.data.title,
      description: thought.data.description,
      pubDate: thought.data.pubDate,
      link: `/thoughts/${thought.id}/`,
    })),
  });
}
