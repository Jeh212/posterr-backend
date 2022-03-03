class User {
  id?: string
  name?: string
  joinDate?: Date
  postCounter?: number

  private constructor({ joinDate, name, postCounter }: User) {
    return Object.assign(this, {
      name,
      postCounter,
      joinDate
    })
  }

  static create({ joinDate, name, postCounter }: User) {
    const user = new User({ joinDate, name, postCounter })
    return user
  }
}
export { User }
