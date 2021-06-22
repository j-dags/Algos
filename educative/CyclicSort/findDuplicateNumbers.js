/*
Prompt: Given an unsorted array of integers from 1 to n+1. The range can have multiple duplicated numbers. Find the duplicated numbers.

Approach: Sort the array using cyclic sort. Return an array thats reduced for values that do not match their index.

O(n)t | O(1)s
*/

const findDuplicateNumbers = (arr) => {
	// loop through each index
	for (let i = 0; i < arr.length; i++) {
		let target = arr[i] - 1
		let targetVal = arr[target]

		// swap numbers until we get duplicates or the current index/value match
		while (target !== i && arr[i] !== arr[target]) {
			arr[target] = arr[i]
			arr[i] = targetVal

			target = arr[i] - 1
			targetVal = arr[target]
		}
	}

	// return an array of all mismatched values/indices
	return arr.reduce((acc, el, idx) => {
		if (el - 1 !== idx) acc.push(el)
		return acc
	}, [])
}

console.log(findDuplicateNumbers([3, 4, 4, 5, 5]))
console.log(findDuplicateNumbers([5, 4, 7, 2, 3, 5, 3]))
