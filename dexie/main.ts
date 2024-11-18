import AppDB from "./src/AppDB.ts"

const db = new AppDB()

await db.friends.add({
    name: "Alice",
    age: 10,
})

await db.friends.each(friend => console.log(friend))

await db.delete()
