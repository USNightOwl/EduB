import createMiddleware from "next-intl/middleware";
import { withAuth } from "next-auth/middleware";
import { type NextRequest } from "next/server";
import { locales } from "./utils/locales";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "en",
});

const authMiddleware = withAuth(
  function onSuccess(req) {
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: "/",
    },
  },
);

const publicPages = ["/", "/auth/.*", "/course/.*"];

export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicPages.flatMap((p) => (p === "/" ? ["", "/"] : p)).join("|")})/?$`,
    "i",
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any
    return (authMiddleware as any)(req);
  }
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", `/(en|vi)/:path*`],
};
