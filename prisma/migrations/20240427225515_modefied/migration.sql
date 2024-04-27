/*
  Warnings:

  - You are about to drop the column `catogary` on the `Resources` table. All the data in the column will be lost.
  - You are about to drop the column `upvotes` on the `Resources` table. All the data in the column will be lost.
  - Added the required column `categary` to the `Resources` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Resources" DROP COLUMN "catogary",
DROP COLUMN "upvotes",
ADD COLUMN     "categary" TEXT NOT NULL;
