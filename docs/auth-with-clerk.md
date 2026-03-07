# Authentication (Clerk)

This project delegates **all authentication and user identity management to Clerk**.

## ✅ What agents should know

- **Do not implement custom auth flows.** Everything related to sign-in, sign-up, session verification, and user identity is handled by Clerk.
- Authentication UI is composed using Clerk components such as `SignInButton`, `SignUpButton`, and `UserButton`.
- Page-level auth state is handled via Clerk primitives like `Show` (from `@clerk/nextjs`).

## 🔧 Key files and patterns

- `app/layout.tsx`
  - Wraps the app in `<ClerkProvider>`.
  - Uses Clerk UI components to show sign-in/sign-up and user menus.

- `proxy.ts`
  - Exports `clerkMiddleware()` to apply Clerk auth middleware across routes.
  - Controls which routes are protected via the `matcher` config.

## 🔒 Route protection (dashboard + redirects)

This app requires that:
- **`/dashboard` is a protected route** that only signed-in users can access.
- **Signed-in users should be redirected from `/` → `/dashboard`.**

### Recommended approach (App Router / server component)
Use Clerk’s server helpers to enforce auth at the page level.

Example (in `app/dashboard/page.tsx`):

```ts
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default function DashboardPage() {
  const { userId } = auth();
  if (!userId) redirect("/");

  return <div>Protected dashboard for user {userId}</div>;
}
```

And on the home page (`app/page.tsx`):

```ts
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default function HomePage() {
  const { userId } = auth();
  if (userId) redirect("/dashboard");

  return <div>Public landing page</div>;
}
```

> You can also protect routes via middleware (`proxy.ts` matcher), but pages should still verify auth where appropriate.

## 🧩 How to add auth-protected functionality

1. **Client-side UI**: Use Clerk components (e.g., `Show when="signed-in"`) to conditionally render UI.
2. **Server-side checks**: For API routes or server logic, use Clerk’s server helpers (e.g., `auth()` or `getAuth()` from `@clerk/nextjs/server`) where needed to validate the user.

## 🔐 Sign-in / Sign-up behavior

- Use Clerk’s built-in sign-in/sign-up UI.
- Ensure the flow uses **modal mode** (e.g., `SignInButton mode="modal"`) so it opens as a modal rather than full-page.
- After sign-in, page should automatically redirect to /dashboard

## ⚠️ Avoid these patterns

- Implementing your own username/password system.
- Storing session data in custom cookies/localStorage instead of using Clerk’s built-in session handling.
- Using non-Clerk middleware for auth checks (unless explicitly required and documented).