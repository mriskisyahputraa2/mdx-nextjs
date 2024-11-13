import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Home() {
  const blogDir = path.join(process.cwd(), "src", "mdx-content", "blogs");
  const contentDir = path.join(process.cwd(), "src", "mdx-content", "contents");

  const blogFiles = fs.readdirSync(blogDir).map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const { data: frontMatter, content } = matter(fileContent);

    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
      content,
      type: "blog",
    };
  });

  const contentFiles = fs.readdirSync(contentDir).map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(contentDir, filename),
      "utf-8"
    );
    const { data: frontMatter, content } = matter(fileContent);

    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
      content,
      type: "content",
    };
  });

  const allFiles = [...blogFiles, ...contentFiles];

  return (
    <main className="container mx-auto lg:max-w-6xl mt-20 flex flex-col gap-6">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-center text-tealGreen mb-8">
        My Next.js Blog Site
      </h1>

      {/* Latest Blogs Section */}
      <section className="py-10">
        <h2 className="text-2xl font-bold text-center">Latest Blogs</h2>
      </section>

      {/* Blog List */}
      <div className="space-y-6">
        {allFiles.map((file) => (
          <Link
            href={`/${file.type === "blog" ? "blogs" : "contents"}/${
              file.slug
            }`}
            passHref
            key={file.slug}
          >
            <div className="flex justify-between items-center gap-4 p-4 border-b border-gray-700 rounded-lg hover:bg-gray-800 cursor-pointer transition-all duration-300">
              <div>
                <h3 className="text-xl font-bold text-tealGreen">
                  {file.meta.title}
                </h3>
                <p className="text-gray-400">{file.meta.description}</p>
              </div>

              <div className="text-gray-400">
                <p>{file.meta.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
