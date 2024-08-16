import React from "react";
import { Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";

const myFont = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

interface LogoProps {
  color?: string;
  showSlogan?: boolean;
}

const Logo = ({ color, showSlogan }: LogoProps) => {
  return (
    <div className={cn(myFont.className, "flex flex-col text-center text-rose-500", color)}>
      <Link href="/" className="text-4xl font-black italic">
        EduB
      </Link>
      {showSlogan && <span className="text-xl">- Choose your course, master your future -</span>}
    </div>
  );
};

export default Logo;
