export const locales = ["en", "vi"];
export const fullLocales = [
  {
    label: "en",
    prefix: "GB",
    language: "English",
  },
  {
    label: "vi",
    prefix: "VN",
    language: "Tiếng Việt",
  },
];

export const pathnames = {
  "/": "/",
  "/auth/register": "/auth/register",
  "/auth/login": "/auth/login",
  "/auth/verify": "/auth/verify",
  "/course/[id]": "/course/[id]",
  "/user/account": "/user/account",
  "/user/my-learning": "/user/my-learning",
  "/user/my-watchlist": "/user/my-watchlist",
};

export type TPathname = "/user/account" | "/user/my-learning" | "/user/my-watchlist";
