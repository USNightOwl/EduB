"use client";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import FormControl from "@mui/material/FormControl";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { fullLocales } from "@/utils/locales";

const ChangeLanguage = () => {
  const locale = useLocale();
  const router = useRouter();

  const handleChange = (event: SelectChangeEvent) => {
    document.cookie = `NEXT_LOCALE=${event.target.value}; path=/; max-age=31536000; SamSite=Lax`;
    router.refresh();
  };

  return (
    <FormControl variant="standard" sx={{ minWidth: 100 }}>
      <Select value={locale} onChange={handleChange} className="text-sm" sx={{ color: "primary.main" }}>
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
