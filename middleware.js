import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);

const clerk = clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }
});

export default clerk;

export const config = {
  matcher: [
    // Skip Next.js internals and static assets
    "/((?!_next|.*\\.(?:.*)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
