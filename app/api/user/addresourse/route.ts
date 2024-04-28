import { NextRequest } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  const session = await auth();

  const { title, description, categary, resourceLink } = await req.json();

  const userEmail = session?.user?.email;

  if (userEmail) {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });
    if (user) {
      const post = await prisma.resources.create({
        data: {
          title: title,
          description: description,
          userId: user.id,
          categary: categary,
          resourceLink: resourceLink,
        },
      });
      if (post) {
        return Response.json(post);
      }
    }
  }
  return Response.json({
    id: 1,
    title: "string",
    description: "string",
    userId: "string",
    catogary: "string",
    upvotes: [""],
    resourceLink: "string",
  });
}
