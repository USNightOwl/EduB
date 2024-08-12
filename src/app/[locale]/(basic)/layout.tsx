"use client";
import "../../globals.css";
import { ThemeProvider } from "@emotion/react";
import { Exo as FontSans } from "next/font/google";
import { GlobalContextProvider } from "../../../context/GlobalContext";
import Header from "@/ui/header";
import theme from "@/themes";
import Footer from "@/ui/footer";

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
    <div className={fontSans.variable}>
      <ThemeProvider theme={theme}>
        <GlobalContextProvider>
          <Header />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </GlobalContextProvider>
      </ThemeProvider>
    </div>
  );
}
