// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const CATEGORIES = new Set<string>([
  "independent-contractors",
  "small-business-owners",
  "department-managers",
  "sports-teams",
  "events",
  "organizational",
]);

export const config = {
  matcher: ["/((?!_next/|api/|favicon.ico|robots.txt|sitemap.xml|media/|img/|logos/).*)"],
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const parts = url.pathname.split("/").filter(Boolean);
  const category = parts[0];

  if (!category || !CATEGORIES.has(category)) return NextResponse.next();

  const cookieName = `ab_${category}_v1`;
  let v = req.cookies.get(cookieName)?.value as "a" | "b" | undefined;
  if (v !== "a" && v !== "b") v = Math.random() < 0.5 ? "a" : "b";

  // /category            -> rewrite to /category/a|b
  // /category/sub        -> rewrite to /category/sub/a|b
  // /category/n or .../n -> pass through (demo page)
  if (parts.length === 1) {
    const next = url.clone();
    next.pathname = `/${category}/${v}`;
    const res = NextResponse.rewrite(next);
    res.cookies.set(cookieName, v, { path: "/", sameSite: "Lax", maxAge: 60 * 60 * 24 * 30 });
    return res;
  }

  const second = parts[1];
  if (second === "a" || second === "b" || second === "n") {
    return NextResponse.next(); // already variant
  }

  // /category/sub -> add a|b (but leave .../n alone by the check above)
  const next = url.clone();
  next.pathname = `/${category}/${second}/${v}`;
  const res = NextResponse.rewrite(next);
  res.cookies.set(cookieName, v, { path: "/", sameSite: "Lax", maxAge: 60 * 60 * 24 * 30 });
  return res;
}

