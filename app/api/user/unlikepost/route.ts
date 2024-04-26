import { NextRequest } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
export async function POST(req: NextRequest) {
  const session = await auth();
  const userEmail = session?.user?.email;
  const { postId } = await req.json();

  if (userEmail) {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });
    if (user) {
      const post = await prisma.posts.findFirst({
        where: {
          id: postId,
        },
      });
      if (post) {
        const likes = post.like;
        await prisma.posts.update({
          where: {
            id: postId,
          },
          data: {
            like: likes ? likes - 1 : 0,
          },
        });
        return Response.json(likes);
      }
    }
  }
  return Response.json(1);
}
