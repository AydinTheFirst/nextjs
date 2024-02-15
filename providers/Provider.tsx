import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

export const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <NextUIProvider>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
      </NextUIProvider>
    </>
  );
};
