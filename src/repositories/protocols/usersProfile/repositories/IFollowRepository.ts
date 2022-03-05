export interface IFollowRepository {
  createFollowing: ({
    userId,
    followingId,
    created_at
  }: Following) => Promise<Following>

  createFollower: ({
    created_at,
    followerId,
    userId
  }: Follower) => Promise<Follower>

  getFollowing: (followingId: string) => Promise<Following | undefined>
  // getFollower: (followerId: string) => Promise<Follower>
}
