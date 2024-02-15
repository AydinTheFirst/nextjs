import type { Metadata } from "next";

import "@/styles/globals.css";
import "@/styles/bs.css";
import { DashboardLayout } from "./components/DashboardLayout";

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
