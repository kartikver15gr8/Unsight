/*
  Warnings:

  - You are about to drop the column `thumbnailUrl` on the `Posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "thumbnailUrl";

-- AlterTable
ALTER TABLE "Resources" ADD COLUMN     "thumbnailUrl" TEXT;
