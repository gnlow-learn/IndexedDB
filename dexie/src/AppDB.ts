import { Dexie, type EntityTable } from "./deps.ts"
import Friend from "./Friend.ts"

export default class AppDB extends Dexie {
    friends!: EntityTable<Friend, "id">

    constructor() {
        super("FriendsDB")
        this.version(1).stores({
            friends: "++id, name, age"
        })
        this.friends.mapToClass(Friend)
    }
}