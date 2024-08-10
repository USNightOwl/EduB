import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import { cn } from "@/lib/utils";

const myFont = localFont({ src: "../../../public/DancingScript.ttf" });

const Logo = () => {
  return (
    <Link href="/" className={cn(myFont.className, "text-rose-800 text-4xl font-black italic")}>
      EduB
    </Link>
  );
};

export default Logo;
