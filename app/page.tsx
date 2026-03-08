import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export default async function Home() {
  const { userId } = await auth();
  const isSignedIn = Boolean(userId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-4 py-16 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-white shadow-sm ring-1 ring-white/10">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              Instant link shortening—no clutter.
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Create short URLs in seconds.
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-slate-200">
              Generate shareable short links, choose custom aliases, and track clicks with
              real-time analytics. Built for developers and teams who want a clean link shortener
              without the noise.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              {isSignedIn ? (
                <Button asChild className="w-full" size="lg">
                  <Link href="/dashboard" className="w-full">
                    Get started
                  </Link>
                </Button>
              ) : (
                <SignInButton mode="modal">
                  <Button className="w-full" size="lg">
                    Sign in
                  </Button>
                </SignInButton>
              )}
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                  🔗
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Shorten links instantly</h3>
                  <p className="text-sm text-slate-300">
                    Paste any URL and get a concise short link that's easy to share.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-sky-300">
                  🗂️
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Customize your slug</h3>
                  <p className="text-sm text-slate-300">
                    Use personalized aliases (e.g., `your.app/go`) to keep branding consistent.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
                  📊
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Track link performance</h3>
                  <p className="text-sm text-slate-300">
                    Quickly see click totals and know which links are performing best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-3">
          <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur">
            <h2 className="text-xl font-semibold">Quick Start</h2>
            <ol className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs font-semibold">
                  1
                </span>
                Sign up and open your dashboard.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs font-semibold">
                  2
                </span>
                Paste a long URL and choose a short alias.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs font-semibold">
                  3
                </span>
                Share the short link and monitor clicks.
              </li>
            </ol>
          </div>

          <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur">
            <h2 className="text-xl font-semibold">Built with modern tools</h2>
            <p className="mt-4 text-sm text-slate-300">
              This demo is built using <span className="font-semibold">Next.js App Router</span>,
              <span className="font-semibold"> Clerk</span> for authentication, and
              <span className="font-semibold"> Drizzle ORM</span> for the database layer.
            </p>
            <p className="mt-4 text-sm text-slate-300">
              Everything is server-rendered where it makes sense, and the UI is
              kept fast with minimal client-side JavaScript.
            </p>
          </div>

          <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur">
            <h2 className="text-xl font-semibold">Ready to shorten links?</h2>
            <p className="mt-4 text-sm text-slate-300">
              Create an account and start sharing cleaner, faster URLs in minutes.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {isSignedIn ? (
                <Button asChild className="w-full" size="lg">
                  <Link href="/dashboard" className="w-full">
                    Get started
                  </Link>
                </Button>
              ) : (
                <SignInButton mode="modal">
                  <Button className="w-full" size="lg">
                    Sign in
                  </Button>
                </SignInButton>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
