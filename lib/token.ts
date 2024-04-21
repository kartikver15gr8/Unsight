import { getVerificationTokenByEmail } from "@/utils/verification-token";
import { v4 as uuidv4 } from "uuid";
import { prisma } from "@/lib/db";
export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 2 * 60 * 60 * 1000); // 2 hours

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await prisma.verificationToken.delete({
      where: {
        identifier_token: existingToken,
      },
    });
  }

  const verificationToken = await prisma.verificationToken.create({
    data: {
      identifier: token,
      email,
      token,
      expires,
    },
  });

  return verificationToken;
};
