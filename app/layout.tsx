import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "@/providers";

import "@/styles/globals.css";
import "@/styles/bs.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fristroop Development",
  description: "Expreince the Extraordinary",
  icons: "/logo.png",
  keywords:
    "Fristroop, Development, Web, Design, SEO, Fast, Secure, Scalable, Custom, Solutions, Animations, Interactions, SEO, Friendly, Fast and Optimized, Secure and Reliable, Scalable and Efficient, Custom Solutions, Animations and Interactions, SEO Friendly, Fristroop Development, Expreince the Extraordinary",
  creator: "Fristroop Development",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
