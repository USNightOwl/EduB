import createMiddleware from "next-intl/middleware";
import { withAuth } from "next-auth/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { locales } from "./utils/locales";

const publicPages = ["/", "/auth/.*", "/course/.*"];
const adminPages = ["/instructor/.*"];

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "en",
});

const authMiddleware = withAuth(
  function middleware(req) {
    const adminPathnameRegex = RegExp(
      `^(/(${locales.join("|")}))?(${adminPages.flatMap((p) => (p === "/" ? ["", "/"] : p)).join("|")})/?$`,
      "i",
    );
    const isAdminPage = adminPathnameRegex.test(req.nextUrl.pathname);
    if (isAdminPage && req.nextauth.token?.user.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", req.url));
    }
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
  matcher: ["/", "/(en|vi)/:path*"],
};
