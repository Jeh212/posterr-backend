import { Reposting } from '@/entities/mockEntities/Repost'
import { RepostRepositoriesMock } from '@/repositories/mock/posts/RepostRepositoriesMock'
import { RepostServiceMock } from '../usecases/posts'

describe('RePostTest', () => {
  it('Should be able to repost someone else post!', async () => {
    const repostMock = new RepostRepositoriesMock()
    const repostSut = new RepostServiceMock(repostMock)

    const repost: Reposting = {
      userId: '123',
      postId: '456',
      created_at: new Date()
    }

    const createPost = await repostSut.create(repost)

    expect(createPost.id).toBe(createPost.id)
  })
})
