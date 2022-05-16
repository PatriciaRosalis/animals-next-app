/*
  Warnings:

  - The `chip` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Chip" AS ENUM ('YES', 'NO', 'DONT');

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "chip",
ADD COLUMN     "chip" "Chip" NOT NULL DEFAULT E'DONT';
