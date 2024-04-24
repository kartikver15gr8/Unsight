import { NextRequest } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  const session = await auth();
  const { description } = await req.json();
  const userEmail = session?.user?.email;

  if (userEmail) {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });
    if (user) {
      const post = await prisma.posts.create({
        data: {
          description: description,
          userId: user.id,
        },
      });
      if (post) {
        return Response.json(post);
      }
    }
  }
  return Response.json({
    id: "string",
    description: "string",
    imgUrl: "string ",
    userId: "string",
    like: "number ",
  });
}
