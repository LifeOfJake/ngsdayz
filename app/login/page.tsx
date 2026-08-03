"use client";

// =============================================================================
// Imports
// =============================================================================

import { signIn } from "next-auth/react";

// =============================================================================
// Component
// =============================================================================

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-xl">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">
            Sentinel
          </h1>

          <p className="mt-3 text-muted-foreground">
            Sign in with your Discord account to continue.
          </p>
        </div>

        <button
          onClick={() =>
            signIn("discord", {
              callbackUrl: "/dashboard",
            })
          }
          className="
            flex
            w-full
            items-center
            justify-center
            rounded-xl
            bg-[#5865F2]
            px-4
            py-3
            font-semibold
            text-white
            transition
            hover:brightness-110
          "
        >
          Continue with Discord
        </button>

      </div>
    </main>
  );
}