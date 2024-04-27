-- CreateTable
CREATE TABLE "Resources" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "catogary" TEXT NOT NULL,
    "upvotes" TEXT[],
    "resourceLink" TEXT NOT NULL,

    CONSTRAINT "Resources_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Resources" ADD CONSTRAINT "Resources_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
