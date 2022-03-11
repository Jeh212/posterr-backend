
class QuotePost {
  id?: string
  created_at: Date
  userComment: string
  postId: string
  userId: string



  private constructor({ created_at, userComment, postId, userId }: QuotePost) {
    return Object.assign(this, {
      created_at,
      userComment,
      postId,
      userId
    })
  }

  static create({ created_at, postId, userId, userComment }: QuotePost) {
    const rePost = new QuotePost({
      created_at,
      userComment,
      postId,
      userId
    })
    return rePost
  }


}
export { QuotePost }
