import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const aboutPath = path.join(process.cwd(), "content", "about.md");

export function getAboutContent(): string[] {
  const raw = fs.readFileSync(aboutPath, "utf-8");
  const { content } = matter(raw);

  // Split on <!-- split --> markers
  const sections = content
    .split(/<!--\s*split\s*-->/)
    .map((s) => s.trim())
    .filter(Boolean);

  // Convert each section to HTML
  return sections.map((s) => marked(s) as string);
}
