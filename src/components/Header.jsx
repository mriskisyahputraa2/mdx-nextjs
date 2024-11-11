import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-lg border-b dark:border-gray-600 text-black dark:text-white z-10 transition-all duration-300 shadow-md">
      <div className="container lg:max-w-6xl mx-auto py-3 flex justify-between items-center px-4">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold text-tealGreen cursor-pointer transition-colors duration-300 hover:text-teal-400">
          <Link href="/">MDX APP</Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6 text-sm font-medium p-1">
            <li className="cursor-pointer transition-all duration-300 transform hover:scale-105 hover:font-semibold hover:text-tealGreen">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer transition-all duration-300 transform hover:scale-105 hover:font-semibold hover:text-tealGreen">
              <Link href="/blogs/first_blog">Blog</Link>
            </li>
            <li className="cursor-pointer transition-all duration-300 transform hover:scale-105 hover:font-semibold hover:text-tealGreen">
              <Link href="/contents/first_content">Content</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
