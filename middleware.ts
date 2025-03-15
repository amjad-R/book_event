import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // For client-side authentication, we'll need to check on the client side
  // This middleware will just handle redirects for public routes

  const path = request.nextUrl.pathname

  // Define auth pages
  const isAuthPage =
    path.startsWith("/auth/login") || path.startsWith("/auth/register") || path.startsWith("/auth/forgot-password")

  // Define protected pages
  const isProtectedPage = path.startsWith("/dashboard") || path.startsWith("/profile")

  // For protected routes, we'll check auth in the component itself
  // For auth pages, we'll also check in the component

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}

