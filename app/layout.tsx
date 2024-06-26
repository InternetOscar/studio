import type { Metadata } from "next";
import { Inter, Martian_Mono, Xanh_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const martian_mono = Martian_Mono({weight: ["300"], subsets: ["latin"]});

export const metadata: Metadata = {
  title: "O-DB Studio / Perth-based Web and Design Studio",
  description: "O-DB Studio is a Perth-based Web and Design Studio crafting beatifully simple digital experiences for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script defer src="https://cloud.umami.is/script.js" data-website-id="bf7de93c-e989-4708-80d9-8914eba0952f"></script>
      </head>
      <body className="bg-stone-100 antialiased" style={martian_mono.style}>{children}</body>
    </html>
  );
}
