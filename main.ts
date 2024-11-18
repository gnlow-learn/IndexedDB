console.log("hi")

const request = indexedDB.open("Test1")

request.onsuccess = _e => {
    const db = request.result
    console.log("success")
}

request.onupgradeneeded = e => {
    const db = request.result

    if (!db.objectStoreNames.contains("users")) {
        const objectStore = db.createObjectStore("users", { keyPath: "id" })
        objectStore.createIndex("name", "name", { unique: false })
    }
}
