class Follower {
  id?: string
  created_at?: Date
  followerId?: Date
  userId?: string

  private constructor({ created_at, followerId, userId }: Follower) {
    return Object.assign(this, {
      created_at,
      followerId,
      userId
    })
  }
  static create({ created_at, followerId, userId }: Follower) {
    const follower = new Follower({ created_at, followerId, userId })
    return follower
  }
}
