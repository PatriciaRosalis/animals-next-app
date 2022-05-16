/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `usernameFacebook` on the `User` table. All the data in the column will be lost.
  - Added the required column `email` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" INTEGER,
ADD COLUMN     "usernameFacebook" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
DROP COLUMN "phoneNumber",
DROP COLUMN "usernameFacebook";
