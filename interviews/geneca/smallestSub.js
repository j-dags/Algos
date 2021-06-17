/*
Given an array, find the smallest subarray who sum >= target.

Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].

Approach:
Iterate through array. Shrink window while sum is greater than target.
*/

const smallestSub = (arr, target) => {
	let end = 0
	let start = 0
	let subSum = arr[0]
	let minLength = Infinity

	while (end < arr.length) {
		if (subSum < target) {
			end++
			subSum += arr[end]
		} else {
			minLength = Math.min(minLength, 1 + end - start)
			subSum -= arr[start]
			start++
		}
	}
	return minLength
}

console.log(smallestSub([2, 1, 5, 2, 3, 2], 7))
console.log(smallestSub([2, 1, 5, 2, 8], 7))
console.log(smallestSub([3, 4, 1, 1, 6], 8))
