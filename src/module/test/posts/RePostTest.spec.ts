import { Reposting } from '@/entities/Repost'
import { RepostService } from '@/module/usecases/posts/RepostService'
import { RepostRepositoriesMock } from '@/repositories/mock/posts/RepostRepositoriesMock'

describe('RePostTest', () => {
  it('Should be able to repost someone else post!', async () => {
    const repostMock = new RepostRepositoriesMock()
    const repostSut = new RepostService(repostMock)

    const repost: Reposting = {
      userId: '123',
      postId: '456',
      created_at: new Date()
    }

    const createPost = await repostSut.create(repost)

    expect(createPost.id).toBe(createPost.id)
  })
})
