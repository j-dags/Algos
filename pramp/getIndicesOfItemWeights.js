/*
Given an array, determine if two of the elements add up to a given limit. If so, return their indices as an array, sorted by largest first.

Approach:
This is pairSum, just returning their indices instead of true/false

Did it the pointer method and hash/memo method.
*/

// MEMO SOLUTION - O(n)t | O(n)s
function getIndicesOfItemWeights(arr, limit) {
	let memo = {}

	for (let i = 0; i < arr.length; i++) {
		// check if difference exists in memo
		if (limit - arr[i] in memo) return [i, memo[limit - arr[i]]]
		// save current element to the memo
		memo[arr[i]] = i
	}
	return []
}

// POINTER SOLUTION - O(nlogn)t | O(1)s
// function getIndicesOfItemWeights(arr, limit) {
// 	arr = arr.sort((a, b) => a - b)
// 	let left = 0
// 	let right = arr.length - 1

// 	while (left < right) {
// 		let sum = arr[left] + arr[right]

// 		if (sum === limit) return [right, left]
// 		else if (sum > limit) right--
// 		else left++
// 	}
// 	return []
// }

console.log(getIndicesOfItemWeights([1, 2, 5, 10, 16], 12))
console.log(getIndicesOfItemWeights([1, 2, 5, 10, 16], 11))
console.log(getIndicesOfItemWeights([1, 2, 5, 10, 16], 26))
