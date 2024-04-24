-- DropForeignKey
ALTER TABLE "Posts" DROP CONSTRAINT "Posts_commentId_fkey";

-- AlterTable
ALTER TABLE "Posts" ALTER COLUMN "commentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comments"("id") ON DELETE SET NULL ON UPDATE CASCADE;
