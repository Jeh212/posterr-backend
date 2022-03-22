
# Planning New feature

### **Important notes**


> This rule applies to posts that have already been made by the user.

> Might have some limitation on how many @ should be mentioned in the answer?

> Can followers of the specific user have access to this information?

> How should this be demonstrated to the user's followers?

> Should you implement per-post response limits for performance reasons?


### Solution

> If, in this case, the response rule applies to posts that have already been made, I would start by treating the database to be able to deal with this new feature. I would start by adding a new specific table for reply, the moment a person wants to comment on a user's post, it is saved in this new table in the database, with the following fields, (id, postId, reply, userId, manyMentions). With these fields, I can create data related to existing posts and new ones. I can control how many people commented on my post and how many mentions were made by a specific user in just one specific post, thus facilitating the use of this data for other future features. Doing it this way, it avoids working on the 'post' table that is already populated, this way it keeps control of the creation and 'update' in another table, in this case the comments table.