/*
  Warnings:

  - You are about to drop the column `serverid` on the `Images` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Images" DROP COLUMN "serverid",
ADD COLUMN     "sercieid" TEXT;
