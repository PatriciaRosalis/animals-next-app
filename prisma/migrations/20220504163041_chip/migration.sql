/*
  Warnings:

  - You are about to drop the column `chips` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "chips",
ADD COLUMN     "chip" BOOLEAN;
