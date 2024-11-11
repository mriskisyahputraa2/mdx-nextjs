import { getContentBySlug } from "@/lib/fetcher";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = await getContentBySlug(params.slug);

  return {
    title: blog.frontmatter.title,
    description: blog.frontmatter.description || "Deskripsi default untuk blog",
  };
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getContentBySlug(params.slug);

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* Blog Title */}
      <h1 className="text-3xl font-bold text-tealGreen mb-6">
        {blog.frontmatter.title}
      </h1>

      {/* Blog Content */}
      <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert">
        <p>{blog.content}</p>
      </article>
    </main>
  );
}
