/*
  Warnings:

  - You are about to drop the column `commentId` on the `Posts` table. All the data in the column will be lost.
  - You are about to drop the `Comments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_userId_fkey";

-- DropForeignKey
ALTER TABLE "Posts" DROP CONSTRAINT "Posts_commentId_fkey";

-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "commentId";

-- DropTable
DROP TABLE "Comments";
