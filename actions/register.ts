"use server";

import * as z from "zod";
import { prisma } from "@/lib/db";
import { RegisterSchema } from "@/schema";
import bcrypt from "bcrypt";
import { getUserByEmail } from "@/utils/user";
import { generateVerificationToken } from "@/lib/token";
import { sendVerificationEmail } from "@/lib/resend";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const isValid = RegisterSchema.safeParse(values);
  console.log("isValid", isValid);

  if (!isValid.success) {
    return { error: "Email is not valid" };
  }

  const { email, password, name } = isValid.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "User already exists" };
  }

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(email, verificationToken.token);

  return { success: "Confirmation Email Sent" };
};
