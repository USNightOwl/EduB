import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import { Caveat } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = Caveat({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

const Banner = () => {
  return (
    <div className="h-80 max-lg:h-52 overflow-clip w-full !bg-black/60 relative ">
      <Image
        src="/main-banner.jpg"
        alt="main banner"
        width={1000}
        height={200}
        className="object-contain w-full absolute top-0 left-0 -z-10"
      />
      <div className="text-white w-full h-full flex items-center justify-center flex-col px-6">
        <div className="relative">
          <Typography variant="h3" className={cn(fontSans.className, "font-black max-w-[600px] text-center")}>
            Success doesn’t come to you, you go to it.
          </Typography>
          <Typography variant="h3" className={cn(fontSans.className, "absolute top-0 -left-4")}>
            "
          </Typography>
          <Typography variant="h3" className={cn(fontSans.className, "absolute bottom-0 right-0")}>
            "
          </Typography>
        </div>
        <Typography
          variant="h6"
          className={cn(fontSans.className, "font-black max-w-[600px] text-center mt-5 uppercase")}
        >
          MARVA COLLINS, AMERICAN EDUCATOR
        </Typography>
      </div>
    </div>
  );
};

export default Banner;
