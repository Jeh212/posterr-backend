export interface IFollowRepository {
  createFollowing: ({
    userId,
    followingId,
    created_at
  }: Following) => Promise<Following>

  getFollowing: (followingId: string) => Promise<Following | undefined>
  removeFollowing: (followingId: string) => Promise<string>
  listFollowing: (userId: string) => Promise<Following[] | undefined>
}
