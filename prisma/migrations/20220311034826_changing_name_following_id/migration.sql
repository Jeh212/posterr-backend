/*
  Warnings:

  - You are about to drop the column `followingUserId` on the `following` table. All the data in the column will be lost.
  - Added the required column `followingId` to the `following` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "following" DROP COLUMN "followingUserId",
ADD COLUMN     "followingId" TEXT NOT NULL;
