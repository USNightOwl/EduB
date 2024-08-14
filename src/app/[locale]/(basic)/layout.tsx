"use client";
import "../../globals.css";
import { Exo as FontSans } from "next/font/google";
import { useContext, useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { GlobalContext } from "../../../context/GlobalContext";
import Header from "@/ui/header";
import Footer from "@/ui/footer";
import { cn } from "@/lib/utils";
import ChangeTheme from "@/ui/button/change-theme";
import themes from "@/themes";
import { ETheme } from "@/types/theme";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useContext(GlobalContext)!;
  const [current_theme, setCurrent_theme] = useState<ETheme>(ETheme.LIGHT);
  useEffect(() => {
    setCurrent_theme(theme || ETheme.LIGHT);
  }, [theme]);

  return (
    <div className={cn(fontSans.variable, "relative")}>
      <ThemeProvider theme={createTheme(themes[current_theme])}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <ChangeTheme />
      </ThemeProvider>
    </div>
  );
}
