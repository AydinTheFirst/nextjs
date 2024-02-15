import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "@/providers";

import "@/styles/globals.css";
import "@/styles/bs.css";
import { DashboardLayout } from "./components/DashboardLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
}
