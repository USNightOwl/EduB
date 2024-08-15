import { Container, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import { Roboto_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const fontSans = Roboto_Mono({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-sans",
});

const RecommendedTopic = () => {
  const t = useTranslations("Global.Title.Card");
  return (
    <Container maxWidth={false} className={cn(fontSans.className, "mb-2 sm:mb-4")}>
      <Typography variant="h5" className={cn("uppercase mb-0 text-nowrap", fontSans.className)}>
        {t("recommended-topic")}
      </Typography>
      <div className="grid max-md:grid-cols-2 max-lg:grid-cols-3 max-2xl:grid-cols-4 grid-cols-5 gap-y-5 gap-x-3 mt-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <Link
            href={"/"}
            className="flex flex-col items-center hover:scale-[0.85] transition-transform ease-in-out"
            key={num}
          >
            <Image
              src={"https://cdn-icons-png.flaticon.com/512/12492/12492519.png"}
              height={100}
              width={100}
              alt="web development"
            ></Image>
            <Typography
              className="flex flex-col items-center justify-center capitalize font-semibold mt-1"
              color="primary.main"
            >
              game development
            </Typography>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default RecommendedTopic;
