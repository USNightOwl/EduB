import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const SocialGroup = () => {
  return (
    <ul className="flex gap-5 items-center mt-5 px-2">
      <Link href="/" className="hover:text-blue-700">
        <FacebookIcon />
      </Link>
      <Link href="/" className="hover:text-red-500">
        <InstagramIcon />
      </Link>
      <Link href="/">
        <LinkedInIcon className="hover:text-blue-500" />
      </Link>
    </ul>
  );
};

export default SocialGroup;
