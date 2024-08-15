"use client";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import FormControl from "@mui/material/FormControl";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { useTransition } from "react";
import { fullLocales } from "@/utils/locales";
import { replaceNewLang } from "@/utils/helper";

const ChangeLanguage = () => {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();

  const handleChange = (event: SelectChangeEvent) => {
    startTransition(() => {
      router.replace(replaceNewLang(pathname, event.target.value));
    });
  };

  return (
    <FormControl variant="standard" sx={{ minWidth: 100 }}>
      <Select
        value={locale}
        onChange={handleChange}
        className="text-sm"
        sx={{ color: "primary.main" }}
        disabled={isPending}
      >
        {fullLocales.map((lang) => (
          <MenuItem value={lang.label} key={lang.label}>
            <div className="flex items-center gap-1">
              <Image
                src={`https://flagsapi.com/${lang.prefix.toUpperCase()}/flat/64.png`}
                alt={lang.prefix}
                width={25}
                height={25}
              />
              <Typography variant="h6" className="text-sm">
                {lang.language}
              </Typography>
            </div>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ChangeLanguage;
