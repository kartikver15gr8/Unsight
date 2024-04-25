import { auth } from "@/auth";
import { prisma } from "@/lib/db";

export default async function UserPosts() {
  const session = await auth();
  const userEmail = session?.user?.email;

  if (userEmail) {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });
    if (user) {
      const posts = await prisma.posts.findMany({
        where: {
          userId: user.id,
        },
      });
      if (posts) {
        return posts;
      }
    }
  }
  return [
    {
      id: 1,
      description: "string",
      imgUrl: "null",
      userId: "string",
      like: 1,
    },
  ];
}
