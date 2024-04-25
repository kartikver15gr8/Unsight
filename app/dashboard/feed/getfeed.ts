import { auth } from "@/auth";
import { prisma } from "@/lib/db";
export async function GetFeed() {
  const session = await auth();
  const userEmail = session?.user?.email;

  if (userEmail) {
    const feed = await prisma.posts.findMany({});
    if (feed) {
      return feed;
    }
  }
  return [
    {
      id: 1,
      description: "string",
      imgUrl: "string",
      userId: "string",
      like: 1,
    },
  ];
}
