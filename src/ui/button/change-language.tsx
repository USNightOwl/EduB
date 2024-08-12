"use client";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const ChangeLanguage = () => {
  const locale = useLocale();
  const router = useRouter();

  const handleChange = (event: SelectChangeEvent) => {
    document.cookie = `NEXT_LOCALE=${event.target.value}; path=/; max-age=31536000; SamSite=Lax`;
    router.refresh();
  };

  return (
    <div className="p-2">
      <Select value={locale} onChange={handleChange}>
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="vi">Vietnam</MenuItem>
      </Select>
    </div>
  );
};

export default ChangeLanguage;
