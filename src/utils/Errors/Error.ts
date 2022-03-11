export class NotFound extends Error {
  constructor(data?: string) {
    super()
    this.name = `NotFound: ${data}`
  }
}


export class InternalServerError extends Error {
  constructor(data?: any) {
    super()
    this.name = `Server Error: ${data}`
  }
}