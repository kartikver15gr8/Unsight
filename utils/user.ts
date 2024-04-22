import { prisma } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      return user;
    }
  } catch (error) {
    return error;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (user) {
      return user;
    }
  } catch (error) {
    return error;
  }
};
