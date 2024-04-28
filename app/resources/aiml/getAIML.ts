import { auth } from "@/auth";
import { prisma } from "@/lib/db";

export async function GetAIML() {
  const session = await auth();
  const userEmail = session?.user?.email;
  if (userEmail) {
    const devOpsResources = await prisma.resources.findMany({
      where: {
        categary: "aiml",
      },
    });
    if (devOpsResources) {
      return devOpsResources;
    }
  }
  return [
    {
      id: 1,
      title: "string",
      description: "string",
      userId: "string",
      catogary: "aiml",
      upvotes: [""],
      resourceLink: "string",
    },
  ];
}
