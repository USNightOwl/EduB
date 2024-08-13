import createMiddleware from "next-intl/middleware";
import { locales } from "./utils/locales";

export default createMiddleware({
  locales,
  defaultLocale: "en",
  localePrefix: "never",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|vi)/:path*"],
};
