import React from "react";
import Link from "next/link";
import Logo from "../logo";

const FooterContent = () => {
  return (
    <div className="flex gap-2 justify-between items-center mt-5 max-md:flex-col">
      <Logo showSlogan={true} color="text-white" />
      <div className="text-center flex">
        <div>HCMUS 2024&nbsp;</div>
        <Link href="https://github.com/nxhawk" className="underline text-blue-500">
          @nxhawk
        </Link>
      </div>
    </div>
  );
};

export default FooterContent;
