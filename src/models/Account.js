export class Account {
  constructor(data) {
    this.id = data.id || null
    this.email = data.email || null
    this.name = data.name || null
    this.picture = data.picture || null
    // TODO add additional properties if needed

    this.bio = data.bio || null
    this.coverImg = data.coverImg || null
  }
}
