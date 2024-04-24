/*
  Warnings:

  - The primary key for the `Comments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Comments` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Posts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Posts` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `commentId` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Posts" DROP CONSTRAINT "Posts_commentId_fkey";

-- AlterTable
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Comments_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Posts" DROP CONSTRAINT "Posts_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "commentId",
ADD COLUMN     "commentId" INTEGER NOT NULL,
ADD CONSTRAINT "Posts_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
