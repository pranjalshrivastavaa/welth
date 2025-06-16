import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);

const clerk = clerkMiddleware({
  publicRoutes: ["/", "/sign-in(.*)", "/sign-up(.*)"], // ✅ add these
  async afterAuth(auth, req, evt) {
    const { userId, redirectToSignIn } = auth;

    if (!userId && isProtectedRoute(req)) {
      return redirectToSignIn();
    }
  },
});

export default clerk;

export const config = {
  matcher: [
    "/((?!_next|.*\\.(?:.*)).*)", // Skip Next.js internals
    "/(api|trpc)(.*)",            // Always run for APIs
  ],
};
