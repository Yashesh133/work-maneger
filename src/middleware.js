import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {

  const loginToken = request.cookies.get("loginToken");

  const loggedUserNotAccessPaths =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";

  if (loggedUserNotAccessPaths) {
    if (loginToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (!loginToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/addTask",
    "/viewTask",
    "/profile/:path",
    "/api/:path",
  ],
};
