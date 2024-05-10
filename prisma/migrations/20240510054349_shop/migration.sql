/*
  Warnings:

  - You are about to drop the column `sercieid` on the `Images` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Images" DROP COLUMN "sercieid",
ADD COLUMN     "serviceid" TEXT;
