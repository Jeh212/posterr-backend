import { IPost } from '@/entities/protocols/IPost'
import { IPostRepositories } from '@/repositories/protocols/posts/repositories'

export class PostRepositoriesMock implements IPostRepositories {
  private readonly posts: IPost[] = [
    {
      _id: '456',
      created_at: new Date('2021-07-11T12:00:00+01:00'),
      postContent: 'Great Day',
      userId: '1'
    },
    {
      _id: '457',
      created_at: new Date('2021-07-10T12:00:00+01:00'),
      postContent: 'Sunny Day',
      userId: '1'
    },
    {
      _id: '458',
      created_at: new Date('2022-07-09T01:00:00+01:00'),
      postContent: 'Rainny Day',
      userId: '1'
    },
    {
      _id: '459',
      created_at: new Date('2022-07-08T01:00:00+01:00'),
      postContent: 'Horrible Day',
      userId: '1'
    },
    {
      _id: '460',
      created_at: new Date('2022-07-07T01:00:00+01:00'),
      postContent: 'Sad Day',
      userId: '1'
    },
    {
      _id: '461',
      created_at: new Date('2021-07-06T12:00:00+01:00'),
      postContent: 'Great Day',
      userId: '1'
    },
    {
      _id: '462',
      created_at: new Date('2021-07-05T12:00:00+01:00'),
      postContent: 'Sunny Day',
      userId: '1'
    },
    {
      _id: '463',
      created_at: new Date('2022-07-04T01:00:00+01:00'),
      postContent: 'Rainny Day',
      userId: '1'
    },
    {
      _id: '464',
      created_at: new Date('2022-07-03T01:00:00+01:00'),
      postContent: 'Horrible Day',
      userId: '1'
    },
    {
      _id: '341',
      created_at: new Date('2022-07-02T01:00:00+01:00'),
      postContent: 'Sad Day',
      userId: '1'
    },
    {
      _id: '501',
      created_at: new Date('2021-07-01T12:00:00+01:00'),
      postContent: 'Great Day',
      userId: '1'
    },
    {
      _id: '104',
      created_at: new Date('2021-06-31T12:00:00+01:00'),
      postContent: 'Sunny Day',
      userId: '1'
    },
    {
      _id: '163',
      created_at: new Date('2022-06-29T01:00:00+01:00'),
      postContent: 'Rainny Day',
      userId: '1'
    },
    {
      _id: '888',
      created_at: new Date('2022-06-28T01:00:00+01:00'),
      postContent: 'Horrible Day',
      userId: '1'
    },
    {
      _id: '900',
      created_at: new Date('2022-06-27T01:00:00+01:00'),
      postContent: 'Sad Day',
      userId: '1'
    }
  ]

  async loadRecentPosts(userId: string): Promise<IPost | undefined> {
    const findUsePosts = this.posts.find(element => element._id === userId)

    return
  }
  async loadOlderPosts(userId: string): Promise<IPost | undefined> {
    return
  }
}
