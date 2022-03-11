/*
  Warnings:

  - Added the required column `followingUserId` to the `following` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "following" ADD COLUMN     "followingUserId" TEXT NOT NULL;
