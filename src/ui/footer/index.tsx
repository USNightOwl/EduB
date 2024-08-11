import React from "react";
import Link from "next/link";
import Logo from "../logo";
import SocialGroup from "./social-group";
import LinkGroup from "./link-group";
import ContactGroup from "./contact-group";

const linkGroup = [
  {
    title: "Page links",
    links: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "About",
        url: "/",
      },
      {
        title: "Testimonial",
        url: "/",
      },
      {
        title: "Blog",
        url: "/",
      },
      {
        title: "Contact",
        url: "/",
      },
    ],
  },
  {
    title: "More Info",
    links: [
      {
        title: "Contact",
        url: "/",
      },
      {
        title: "Security",
        url: "/",
      },
      {
        title: "Term of service",
        url: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="text-white bg-gradient-to-b from-[#222023] to-[#1e2c47]">
      <div className="p-2 max-w-[1140px] max-md:max-w-[720px] max-lg:max-w-[900px] mx-auto">
        <div className="py-2 pb-8 grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-5">
          <ContactGroup />
          {linkGroup.map((link, index) => (
            <LinkGroup title={link.title} links={link.links} key={index} />
          ))}
          <div>
            <div className="text-xl font-bold border-b-2 border-red-800 pb-4">Social Media</div>
            <SocialGroup />
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center mt-5">
          <Logo color="text-white" />
          <div>EduB 2024 HCMUS @nxhawk</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
