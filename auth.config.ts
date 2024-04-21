import type { NextAuthConfig } from "next-auth";
import EmailProvider from "next-auth/providers/nodemailer";

export default {
  providers: [
    EmailProvider({
      id: "email",
      name: "email",
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
} satisfies NextAuthConfig;
