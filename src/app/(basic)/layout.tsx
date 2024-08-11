"use client";
import "../globals.css";
import { ThemeProvider } from "@emotion/react";
import { Exo as FontSans } from "next/font/google";
import { GlobalContextProvider } from "../context/GlobalContext";
import Header from "@/ui/header";
import theme from "@/themes";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={cn(fontSans.variable, "bg-gray-100")}>
        <ThemeProvider theme={theme}>
          <GlobalContextProvider>
            <Header />
            <main className="min-h-screen pt-16">{children}</main>
          </GlobalContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
