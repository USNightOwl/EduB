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

  "/instructor/profile": "/instructor/profile",
  "/instructor/course": "/instructor/course",
  "/instructor/category": "/instructor/category",
  "/instructor/course/new": "/instructor/course/new",
};

export type TPathname =
  | "/user/account"
  | "/user/my-learning"
  | "/user/my-watchlist"
  | "/instructor/profile"
  | "/instructor/course"
  | "/instructor/course/new"
  | "/instructor/category";
