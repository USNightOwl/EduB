import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

interface ILink {
  title: string;
  url: string;
}

interface LinkProps {
  title: string;
  links: ILink[];
}

const LinkGroup = ({ title, links }: LinkProps) => {
  const t = useTranslations("Footer");

  return (
    <div>
      <div className="text-xl font-bold border-b-2 border-red-800 sm:pb-4 pb-3">{t(title)}</div>
      <ul className="gap-5 flex flex-col mt-5 font-light">
        {links.map((link) => (
          <Link href={link.url} key={link.title} className="hover:text-red-500 px-2 w-fit">
            {t(link.title)}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default LinkGroup;
