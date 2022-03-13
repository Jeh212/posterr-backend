import { Reposting } from '@/entities/mockEntities/Repost'

interface IRepostingRepositories {
  createReposting: ({
    userId,
    created_at,
    postId
  }: Reposting) => Promise<Reposting>
}

export { IRepostingRepositories }
