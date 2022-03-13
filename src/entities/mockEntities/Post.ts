class Post {
  id?: string

  created_at: Date | string

  postContent: string

  userId: string | undefined

  private constructor({ created_at, postContent, userId }: Post) {
    return Object.assign(this, {
      created_at,
      postContent,
      userId
    })
  }

  static create({ created_at, postContent, userId }: Post) {
    const post = new Post({ created_at, postContent, userId })
    return post
  }
}
export { Post }
