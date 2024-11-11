import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  // Anda bisa menambahkan opsi konfigurasi MDX di sini jika diperlukan
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
