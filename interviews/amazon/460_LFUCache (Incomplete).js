/*
Design and implement a data structure for a Least Frequently Used (LFU) cache.

Implement the LFUCache class:

    LFUCache(int capacity) Initializes the object with the capacity of the data structure.
    int get(int key) Gets the value of the key if the key exists in the cache. Otherwise, returns -1.
    void put(int key, int value) Update the value of the key if present, or inserts the key if not already present. When the cache reaches its capacity, it should invalidate and remove the least frequently used key before inserting a new item. For this problem, when there is a tie (i.e., two or more keys with the same frequency), the least recently used key would be invalidated.

To determine the least frequently used key, a use counter is maintained for each key in the cache. The key with the smallest use counter is the least frequently used key.

When a key is first inserted into the cache, its use counter is set to 1 (due to the put operation). The use counter for a key in the cache is incremented either a get or put operation is called on it.

The functions get and put must each run in O(1) average time complexity.

REQ:
- Build an LFU cache
- Has get and put methods
- When capacity is reached, invalidate the LFU key. If there's a tie, invalidate the LRU of the two

Approach:
- Utilize the map structure within Javascript. Has unique keys, keeps track of order

this.capacity
this.cache = new Map()

get:
- get the value of a key, return -1 if missing
- increment a count for the key that's accessed
this.cache.get('a') => {val: 23, counter: 2}
// - move that key to the end of the map once its used (don't need this right now since it's)

put:
- delete key:value
- insert key:value
- If I put the same key repeatedly, does the count increase or stay at 1?
- if (over capacity) delete LFU key:value pair. Use LRU as tie break
*/

class LFUCache {
	constructor(capacity) {
		this.capacity = capacity
		this.cache = new Map()
		this.lfu = { key: null, count: Infinity }
	}

	get(key) {
		if (!this.cache.has(key)) return -1

		// Getting value of key. Moving key:value to end of cache and incrementing the count
		let value = this.cache.get(key)
		this.cache.delete(key)
		this.cache.set(key, { ...value, count: ++value.count })
		// Keep track of LFU
		if (value.count < this.lfu.count)
			this.lfu = { key: key, count: value.count }
		return value.value
	}

	put(key, value, count = 0) {
		// check if key is already in cache
		if (this.cache.has(key)) count = this.cache.get(key).count

		this.cache.delete(key)
		this.cache.set(key, { value: value, count: ++count })
		if (count < this.lfu.count) this.lfu = { key: key, count: count }

		// If over capcity, delete LFU/LRU key. Fails O(1) time complexity
		if (this.cache.size > this.capacity) {
			this.cache.delete(this.lfu.key)
		}
	}
}

/*
["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
*/

let cache = new LFUCache(2)
cache.put(1, 1)
cache.put(2, 2)
cache.get(1)
cache.put(3, 3)

console.log(cache)
