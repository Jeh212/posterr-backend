class Reposting {
  id?: string

  created_at: Date

  postId: string

  userId: string

  private constructor({ created_at, postId, userId }: Reposting) {
    return Object.assign(this, {
      created_at,
      postId,
      userId
    })
  }
  static create({ created_at, postId, userId }: Reposting) {
    const rePost = new Reposting({ created_at, postId, userId })
    return rePost
  }
}
export { Reposting }
