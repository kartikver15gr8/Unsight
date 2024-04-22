"use server";

import { LoginSchema } from "@/schema";
import { z } from "zod";
import { signIn } from "@/auth";
import { prisma } from "@/lib/db";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const confirmationLink = "http://localhost:3000/confirm-email";

  //   Check to see if data is valid
  const isValid = LoginSchema.safeParse(values);
  console.log(isValid);

  if (!isValid.success) {
    throw new Error("Email is not valid");
  }

  const { email } = isValid.data;

  // if (email.indexOf("gmail.com") >= 0) {
  //   throw new Error("Write your clg email");
  // }

  signIn("email", { email, redirectTo: "/dashboard" });

  return { success: `Email sent to ${email}` };
};
