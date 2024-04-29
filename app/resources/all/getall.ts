import { prisma } from "@/lib/db";
export const GetAllResources = async () => {
  const resources = await prisma.resources.findMany({});
  if (resources) {
    return resources;
  }
  return [
    {
      id: 1,
      title: "string",
      description: "string",
      userId: "string",
      categary: "string",
      upvotes: [""],
      resourceLink: "string",
    },
  ];
};
