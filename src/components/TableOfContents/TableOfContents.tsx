import Link from "next/link";
import React from "react";

const TableOfContents = () => {
  return (
    <div className="w-1/5 border rounded-md dark:border-gray-600 p-2 pt-0 bg-white dark:bg-[#212529] shadow-lg">
      <p className="py-2 text-lg font-medium">Table Of Contents</p>

      <ul className="list-disc mx-7 mt-2 space-y-1">
        <li className="cursor-pointer">
          <Link href="/blogs/first_blog">First Blog</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/blogs/second_blog">Second Blog</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/contents/first_content">Content</Link>
        </li>
      </ul>
    </div>
  );
};

export default TableOfContents;
