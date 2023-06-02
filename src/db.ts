import { Storage, Drivers, Database } from "@ionic/storage";


let storage: Database
let favs

export async function initStore() {
    storage = new Storage()
    await storage.create()
}

export async function set(key: string, val: {}) {
    await storage.set(key, val)
}

export async function get(key: string) {
    const val = await storage.get(key)
    return val
}

export async function remove(key:string) {
    await storage.remove(key)
}

export async function clear() {
    await storage.clear()
}

export async function keys() {
    const keys = storage.keys()
    return keys
}