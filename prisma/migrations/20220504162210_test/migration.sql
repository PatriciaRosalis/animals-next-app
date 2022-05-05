/*
  Warnings:

  - You are about to drop the column `chip` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "chip",
ADD COLUMN     "chips" BOOLEAN;
