
# Planning New feature

### **Important notes**


> This rule applies to posts that have already been made by the user.

> Might have some limitation on how many @ should be mentioned in the answer?

> Can followers of the specific user have access to this information?

> How should this be demonstrated to the user's followers?

> Should you implement per-post response limits for performance reasons?


# Solution

> If, in this case, the response rule applies to posts that have already been made, I would start by treating the database to be able to deal with this new feature. I would start by adding a new specific table for reply, the moment a person wants to comment on a user's post, it is saved in this new table in the database, with the following fields, (id, postId, reply, userId, manyMentions). With these fields, I can create data related to existing posts and new ones. I can control how many people commented on my post and how many mentions were made by a specific user in just one specific post, thus facilitating the use of this data for other future features. Doing it this way, it avoids working on the 'post' table that is already populated, this way it keeps control of the creation and 'update' in another table, in this case the comments table.



# self-critique & scaling


>The project is very fun, with great possibilities to improve or even be used in some other service. In the case of personal interest, I would have implemented this idea in some large project, to acquire experience of observing the way the user interacts with the “app” developed by me with the intention of collecting positive and negative opinions.
I would start by dividing the project into specific services, which would perform their simple and objective tasks requested by a client (Request) to create, list and update a post or a user. I would think of it this way because, in case it grows, requests would slow down due to the number of requests made per minute. To support this amount of users accessing simultaneously, a message queue system such as redis would be able to handle these requests. If I need to change in the future, I would use some other more robust messaging queue system like Apache Kafka. For security reasons, I would create a gateway api to control the access of my communication microservices, a real-time monitoring and control the amount of requests that an api or route can receive. Finally, I'll continue to focus on testing some features that I ended up not covering due to lack of time, and I'm also trying hard to learn jest.