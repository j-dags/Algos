/*
We're asked to implement the structure which provides the following operations in O(1)\mathcal{O}(1)O(1) time :

    Get the key / Check if the key exists

    Put the key

    Delete the first added key

The first two operations in O(1)\mathcal{O}(1)O(1) time are provided by the standard hashmap, and the last one - by linked list.

Approach:
Use a Map (ES6 data structure)

The MAP object holds key-value pairs and remembers the original insertion order of the keys.
- Maps are ordered
- ANY data structure can be used for keys and pairs. Objects can only have strs as keys
- Seems keys must be unique

O(1)t | O(n)s

*/

var LRUCache = function (capacity) {
	this.capacity = capacity
	this.map = new Map()
}

LRUCache.prototype.get = function (key) {
	if (!this.map.has(key)) return -1
	const val = this.map.get(key)
	this.map.delete(key)
	this.map.set(key, val)
	return val
}

LRUCache.prototype.put = function (key, value) {
	this.map.delete(key)
	this.map.set(key, value)
	if (this.map.size > this.capacity) {
		const firstItem = this.map.keys().next().value
		this.map.delete(firstItem)
	}
}

const myCache = new LRUCache(5)
myCache.put('a', 1)
myCache.put('b', 2)
myCache.put('c', 3)
myCache.put('d', 4)
myCache.put('e', 5)
myCache.put(2, 6)
myCache.put({}, 6)
myCache.put([], 6)
console.log(myCache)
console.log(myCache.map.size)

console.log(myCache.get('a'))
