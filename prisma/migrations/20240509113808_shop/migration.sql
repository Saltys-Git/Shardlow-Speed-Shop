/*
  Warnings:

  - You are about to drop the column `userId` on the `LoginSessions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "LoginSessions" DROP CONSTRAINT "LoginSessions_userId_fkey";

-- AlterTable
ALTER TABLE "LoginSessions" DROP COLUMN "userId";

-- AddForeignKey
ALTER TABLE "LoginSessions" ADD CONSTRAINT "LoginSessions_id_fkey" FOREIGN KEY ("id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
