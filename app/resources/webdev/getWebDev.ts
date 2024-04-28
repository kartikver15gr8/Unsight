import { auth } from "@/auth";
import { prisma } from "@/lib/db";

export const GetWebDev = async () => {
  const session = await auth();
  const userEmail = session?.user?.email;
  if (userEmail) {
    const webDevResources = await prisma.resources.findMany({
      where: {
        categary: "webdev",
      },
    });
    if (webDevResources) {
      return webDevResources;
    }
  }
  return [
    {
      id: 1,
      title: "string",
      description: "string",
      userId: "string",
      catogary: "webdev",
      upvotes: [""],
      resourceLink: "string",
    },
  ];
};
