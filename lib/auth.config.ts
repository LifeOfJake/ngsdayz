import Discord from "next-auth/providers/discord";

import type { NextAuthConfig } from "next-auth";

export default {
  providers: [
    Discord({
      clientId: process.env.AUTH_DISCORD_ID!,
      clientSecret: process.env.AUTH_DISCORD_SECRET!,
    }),
  ],

  pages: {
    signIn: "/login",
  },

  trustHost: true,
} satisfies NextAuthConfig;