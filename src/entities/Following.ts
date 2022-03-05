class Following {
  id?: string
  created_at?: Date
  followingId?: string
  userId?: string

  private constructor({ created_at, followingId, userId }: Following) {
    return Object.assign(this, {
      created_at,
      followingId,
      userId
    })
  }
  static create({ created_at, followingId, userId }: Following) {
    const following = new Following({ created_at, followingId, userId })
    return following
  }
}
