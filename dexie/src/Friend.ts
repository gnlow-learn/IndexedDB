import { Entity } from "./deps.ts"
import type AppDB from "./AppDB.ts"

export default class Friend extends Entity<AppDB> {
    id!: number
    name!: string
    age!: number

    async birthday() {
        await this.db.friends.update(this.id, friend => { ++friend.age })
    }
}