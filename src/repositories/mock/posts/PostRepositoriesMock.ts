import { IPost } from '@/entities/protocols/IPost'
import { IPostRepositories } from '@/repositories/protocols/posts/repositories'
import { v4 as uuid } from 'uuid'

export class PostRepositoriesMock implements IPostRepositories {
  private readonly posts: IPost[] = []

  async createPost(post: IPost): Promise<IPost> {
    Object.assign(post, {
      id: uuid(),
      created_at: new Date()
    })
    this.posts.push(post)

    return post
  }

  async loadRecentPosts(userId: string): Promise<IPost[] | undefined> {
    const recentPost = [
      {
        postContent: 'My Second post',
        userId: 'b056d610-6bfe-4956-b88d-83609fcef908',
        id: '96559b30-aaf0-4ae6-b148-3f83e6490fae',
        created_at: '2022-03-06T02:31:55.420Z'
      },
      {
        postContent: 'My first post',
        userId: 'b056d610-6bfe-4956-b88d-83609fcef908',
        id: '96559b30-aaf0-4ae6-b148-3f83e6490fae',
        created_at: '2022-03-07T02:31:55.420Z'
      },
      {
        postContent: 'My fourth post',
        userId: 'b056d610-6bfe-4956-b88d-83609fcef908',
        id: '96559b30-aaf0-4ae6-b148-3f83e6490fae',
        created_at: '2022-03-04T02:31:55.420Z'
      },
      {
        postContent: 'My third post',
        userId: 'b056d610-6bfe-4956-b88d-83609fcef908',
        id: '96559b30-aaf0-4ae6-b148-3f83e6490fae',
        created_at: '2022-03-05T02:31:55.420Z'
      },
      {
        postContent: 'My fifth post',
        userId: 'b056d610-6bfe-4956-b88d-83609fcef908',
        id: '96559b30-aaf0-4ae6-b148-3f83e6490fae',
        created_at: '2022-03-03T02:31:55.420Z'
      },
      {
        postContent: 'My sixth post',
        userId: 'b056d610-6bfe-4956-b88d-83609fcef908',
        id: '96559b30-aaf0-4ae6-b148-3f83e6490fae',
        created_at: '2022-03-02T02:31:55.420Z'
      },
      {
        postContent: 'My sventh post',
        userId: 'b056d610-6bfe-4956-b88d-83609fcef908',
        id: '96559b30-aaf0-4ae6-b148-3f83e6490fae',
        created_at: '2022-03-01T02:31:55.420Z'
      }
    ]

    const fiveRecentPost = recentPost.splice(0, 5)

    return fiveRecentPost
  }

  async loadOlderPosts(userId: string): Promise<IPost[] | undefined> {
    const recentPost = [
      {
        postContent: 'My Second post',
        userId: 'b056d610-6bfe-4956-b88d-83609fcef908',
        id: '96559b30-aaf0-4ae6-b148-3f83e6490fae',
        created_at: '2022-02-06T02:31:55.420Z'
      },
      {
        postContent: 'My first post',
        userId: 'b056d610-6bfe-4956-b88d-83609fcef908',
        id: '96559b30-aaf0-4ae6-b148-3f83e6490fae',
        created_at: '2022-02-07T02:31:55.420Z'
      },
      {
        postContent: 'My fourth post',
        userId: 'b056d610-6bfe-4956-b88d-83609fcef908',
        id: '96559b30-aaf0-4ae6-b148-3f83e6490fae',
        created_at: '2022-03-04T02:31:55.420Z'
      },
      {
        postContent: 'My third post',
        userId: 'b056d610-6bfe-4956-b88d-83609fcef908',
        id: '96559b30-aaf0-4ae6-b148-3f83e6490fae',
        created_at: '2022-03-05T02:31:55.420Z'
      },
      {
        postContent: 'My fifth post',
        userId: 'b056d610-6bfe-4956-b88d-83609fcef908',
        id: '96559b30-aaf0-4ae6-b148-3f83e6490fae',
        created_at: '2022-03-03T02:31:55.420Z'
      },
      {
        postContent: 'My sixth post',
        userId: 'b056d610-6bfe-4956-b88d-83609fcef908',
        id: '96559b30-aaf0-4ae6-b148-3f83e6490fae',
        created_at: '2022-03-02T02:31:55.420Z'
      },
      {
        postContent: 'My sventh post',
        userId: 'b056d610-6bfe-4956-b88d-83609fcef908',
        id: '96559b30-aaf0-4ae6-b148-3f83e6490fae',
        created_at: '2022-03-01T02:31:55.420Z'
      }
    ]

    const fiveOlderPost = recentPost.splice(0, 5)

    return fiveOlderPost
  }
}
