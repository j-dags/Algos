/*
Prompt: Given an unsorted array of integers from 1 to n+1. The range has one duplicated but it can be repeated multiple times. Find the duplicated.

Approach: Sort the array using cyclic sort. When we run into a value that does not match its index, return said value.

O(n)t | O(1)s
*/

const findDuplicateNumbers = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let target = arr[i] - 1
		let targetVal = arr[target]

		while (target !== i && arr[i] !== arr[target]) {
			arr[target] = arr[i]
			arr[i] = targetVal

			target = arr[i] - 1
			targetVal = arr[target]
		}
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] - 1 !== i) return arr[i]
	}
	return null
}

console.log(findDuplicateNumbers([1, 4, 4, 3, 2]))
console.log(findDuplicateNumbers([2, 1, 3, 3, 5, 4]))
console.log(findDuplicateNumbers([2, 4, 1, 4, 4]))
