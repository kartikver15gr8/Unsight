"use server";

import { LoginSchema } from "@/schema";
import { z } from "zod";
import { signIn } from "@/auth";
import { prisma } from "@/lib/db";
import { universities } from "./domains";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const confirmationLink = "http://localhost:3000/confirm-email";
  const clgEmails = universities;

  //   Check to see if data is valid

  const isValid = LoginSchema.safeParse(values);
  console.log(isValid);

  if (!isValid.success) {
    throw new Error("Email is not valid");
  }

  const { email } = isValid.data;

  if (email) {
    for (let i = 0; i < clgEmails.length; i++) {
      if (clgEmails[i] == email.split("@")[1]) {
        signIn("email", { email, redirectTo: "/dashboard/feed" });
        return { success: `Email sent to ${email}` };
      }
    }
    throw Error("Invalid Email, use College Email: " + email);
  }
  // if (email.indexOf("gmail.com") >= 0) {
  //   throw new Error("Write your clg email");
  // }

  // signIn("email", { email, redirectTo: "/dashboard/feed" });\
  return { Msg: `Provide valid email` };
};
