import { auth } from "@/auth";
import { prisma } from "@/lib/db";
export async function GET() {
  const session = await auth();
  const userEmail = session?.user?.email;

  if (userEmail) {
    const feed = await prisma.posts.findMany({});
    if (feed) {
      return Response.json(feed);
    }
  }
  return Response.json([
    {
      id: 1,
      description: "string",
      imgUrl: "string",
      userId: "string",
      like: 1,
    },
  ]);
}
