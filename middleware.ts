import { uniformMiddleware } from "@uniformdev/next-app-router/middleware";
import { NextRequest, NextResponse } from "next/server";

const uniform = uniformMiddleware();

export default function middleware(request: NextRequest) {
  // Serve the F1 fan page at the root path
  if (request.nextUrl.pathname === "/") {
    return NextResponse.next();
  }
  
  // All other routes go through Uniform
  return uniform(request);
}

// IMPORTANT: This is required for the middleware to work correctly for preview in Next.js 16
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
  runtime: "experimental-edge",
};
