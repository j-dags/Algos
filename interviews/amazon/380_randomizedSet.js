/*

Implement the RandomizedSet class:

    RandomizedSet() Initializes the RandomizedSet object.
    bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
    bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
    int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.

You must implement the functions of the class such that each function works in average O(1) time complexity.

*/

class RandomizedSet {
	constructor() {
		this.map = new Map()
		this.arr = []
	}

	insert(val) {
		if (this.map.has(val)) return false
		this.arr.push(val)
		this.map.set(val, this.arr.length - 1)
		return true
	}

	remove = function (val) {
		if (!this.map.has(val)) return false

		let idxToRem = this.map.get(val) // find the idx of the element to be removed
		let lastEl = this.arr[this.arr.length - 1] // find the value of last element
		this.arr[idxToRem] = lastEl // swap last element val to idx to be removed
		this.arr.pop() // pop off last element

		this.map.set(lastEl, idxToRem) // save lastEl:idxToRem key:value to map
		this.map.delete(val) // delete val from map
		return true
	}

	getRandom = function () {
		return this.arr[Math.floor(Math.random() * this.arr.length)]
	}
}

let set = new RandomizedSet()

set.insert(1)
console.log(set)
set.insert(2)
console.log(set)
set.remove(1)

console.log(set)
