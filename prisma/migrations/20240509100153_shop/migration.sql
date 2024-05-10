/*
  Warnings:

  - You are about to drop the `TableName` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "TableName";

-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "serverid" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);
