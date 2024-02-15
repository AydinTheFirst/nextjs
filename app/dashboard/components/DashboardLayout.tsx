"use client";

import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import { Nav } from "./Nav";
import { Sidenav } from "./Sidenav";

export const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);
  const { theme } = useTheme();

  const logo = theme !== "dark" ? "/next-dark.svg" : "/next.svg";

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const nav = document.getElementById("navbar");
    const sidebar = document.getElementById("sidebar");
    const h = `${nav?.offsetHeight}px`;
    console.log(h);

    document.body.style.paddingTop = h;
    if (sidebar) sidebar.style.height = h;

    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 768);
    });

    return () => {
      document.body.style.paddingTop = "0";
      if (sidebar) sidebar.style.height = "0";

      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth < 768);
      });
    };
  }, []);

  console.log(sidebarOpen);

  return (
    <div className="overflow-hidden">
      <Nav
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isMobile={isMobile}
      />
      <Sidenav
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isMobile={isMobile}
      />

      <main
        className="container overflow-auto transition-all"
        style={{
          marginLeft: `${sidebarOpen && !isMobile ? "260px" : "auto"}`,
          width: `${sidebarOpen && !isMobile ? "calc(100% - 260px)" : "100%"}`,
        }}
      >
        {children}
      </main>
    </div>
  );
};
