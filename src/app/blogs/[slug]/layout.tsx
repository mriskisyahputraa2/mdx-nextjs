import React from "react";
import TableOfContents from "@/components/TableOfContents/TableOfContents";

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mt-20 container mx-auto lg:max-w-6xl px-5 flex items-start gap-4 relative">
      {children}
      <TableOfContents />
    </section>
  );
}
