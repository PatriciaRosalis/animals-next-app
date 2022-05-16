/*
  Warnings:

  - The `sterilized` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `chip` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Options" AS ENUM ('YES', 'NO', 'DONT');

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "sterilized",
ADD COLUMN     "sterilized" "Options" DEFAULT E'DONT',
DROP COLUMN "chip",
ADD COLUMN     "chip" "Options" NOT NULL DEFAULT E'DONT';

-- DropEnum
DROP TYPE "Chip";
