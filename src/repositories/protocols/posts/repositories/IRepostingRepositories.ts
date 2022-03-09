import { Reposting } from '@/entities/Reposting'

interface IRepostingRepositories {
  createReposting: ({
    userId,
    created_at,
    postId
  }: Reposting) => Promise<Reposting>
}

export { IRepostingRepositories }
