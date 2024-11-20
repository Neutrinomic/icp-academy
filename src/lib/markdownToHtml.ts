import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm"; // Import the GFM plugin

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(gfm) // Use the GFM plugin
    .use(html)
    .process(markdown);
  return result.toString();
}
