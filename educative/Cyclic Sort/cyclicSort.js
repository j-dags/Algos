/*
Prompt: Given an arr of n objects, sort arr in place in O(n)t O(1)s.

Approach: Iterate through array and swap current element with its destination element.

O(n)t | O(1)s

*/

const cyclicSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let target = arr[i] - 1
		let targetVal = arr[target]

		// Swap current element and its destination element
		arr[target] = arr[i]
		arr[i] = targetVal
	}
	return arr
}

console.log(cyclicSort([3, 1, 5, 4, 2]))
console.log(cyclicSort([2, 6, 4, 3, 1, 5]))
