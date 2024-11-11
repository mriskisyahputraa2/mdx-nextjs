import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const locationDir = path.join(process.cwd(), "/src/mdx-content/blogs");
const locationContent = path.join(process.cwd(), "/src/mdx-content/contents");
// const locationLegal = path.join(process.cwd(), "/src/_mdx-content/legal");

export async function getBlogBySlug(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(locationDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = await compileMDX<{
    thumbnail: string;
    title: string;
    description: string;
    author: string;
    date: string;
    photo: string;
    tags: string[];
  }>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });
  return {
    frontmatter,
    content,
    slug: path.parse(fileName).name,
  };
}

export async function getContentBySlug(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(locationContent, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = await compileMDX<{
    thumbnail: string;
    title: string;
    description: string;
    author: string;
    date: string;
    photo: string;
    tags: string[];
  }>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });
  return {
    frontmatter,
    content,
    slug: path.parse(fileName).name,
  };
}
