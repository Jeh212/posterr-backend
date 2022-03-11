-- RenameForeignKey
ALTER TABLE "posts" RENAME CONSTRAINT "posts_userId_fkey" TO "fk_User_Post";

-- RenameForeignKey
ALTER TABLE "quoteposts" RENAME CONSTRAINT "quoteposts_postId_fkey" TO "fk_Post_QuotePost";

-- RenameForeignKey
ALTER TABLE "quoteposts" RENAME CONSTRAINT "quoteposts_userId_fkey" TO "fk_User_QuotePost";

-- RenameForeignKey
ALTER TABLE "retweets" RENAME CONSTRAINT "retweets_postId_fkey" TO "fk_Post_ReTweets";

-- RenameForeignKey
ALTER TABLE "retweets" RENAME CONSTRAINT "retweets_userId_fkey" TO "fk_User_ReTweets";
