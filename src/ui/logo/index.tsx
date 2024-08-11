import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import { cn } from "@/lib/utils";

const myFont = localFont({ src: "../../../public/DancingScript.ttf" });

interface LogoProps {
  color?: string;
}

const Logo = ({ color }: LogoProps) => {
  return (
    <Link href="/" className={cn(myFont.className, "text-rose-800 text-4xl font-black italic", color)}>
      EduB
    </Link>
  );
};

export default Logo;
