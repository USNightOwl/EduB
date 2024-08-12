import React from "react";
import { useTranslations } from "next-intl";
import SocialGroup from "./social-group";
import LinkGroup from "./link-group";
import ContactGroup from "./contact-group";
import FooterContent from "./footer-content";

const linkGroup = [
  {
    title: "page-links",
    links: [
      {
        title: "home",
        url: "/",
      },
      {
        title: "about",
        url: "/",
      },
      {
        title: "testimonial",
        url: "/",
      },
      {
        title: "blog",
        url: "/",
      },
      {
        title: "contact",
        url: "/",
      },
    ],
  },
  {
    title: "more-info",
    links: [
      {
        title: "contact",
        url: "/",
      },
      {
        title: "security",
        url: "/",
      },
      {
        title: "term-of-service",
        url: "/",
      },
    ],
  },
];

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="text-white bg-gradient-to-b from-[#222023] to-[#1e2c47]">
      <div className="p-2 max-w-[1140px] max-md:max-w-[720px] max-lg:max-w-[900px] mx-auto">
        <div className="py-2 pb-8 grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-5">
          <ContactGroup />
          {linkGroup.map((link, index) => (
            <LinkGroup title={link.title} links={link.links} key={index} />
          ))}
          <div>
            <div className="text-xl font-bold border-b-2 border-red-800 pb-4">{t("social-media")}</div>
            <SocialGroup />
          </div>
        </div>
        <hr />
        <FooterContent />
      </div>
    </footer>
  );
};

export default Footer;
