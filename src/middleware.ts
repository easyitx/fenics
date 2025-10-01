import acceptLanguage from "accept-language";
import { NextRequest, NextResponse } from "next/server";
import { cookieName, fallbackLng, languages } from "@/app/i18n/settings";

// @ts-expect-error - acceptLanguage.languages is not properly typed
acceptLanguage.languages(languages);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

export function middleware(req: NextRequest) {
  if (
    /\.(ico|png|svg|jpg|jpeg|webp|json|xml|txt|js|css)$/.test(
      req.nextUrl.pathname
    )
  ) {
    return NextResponse.next();
  }

  let lng;
  if (req.cookies.has(cookieName)) {
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  }
  if (!lng) {
    const al = req.headers.get("accept-language") ?? "";
    lng = acceptLanguage.get(al);
  }
  if (!lng) lng = fallbackLng;

  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    );
  }

  if (req.headers.has("referer")) {
    // @ts-expect-error - referer header can be null but URL constructor expects string
    const refererUrl = new URL(req.headers.get("referer"));
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next();
    if (lngInReferer) {
      response.cookies.set(cookieName, lngInReferer);
    }
    return response;
  }

  return NextResponse.next();
}
