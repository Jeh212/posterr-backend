export class NotFound extends Error {
  constructor(data?: string) {
    super()
    this.name = `NotFound: ${data}`
  }
}
