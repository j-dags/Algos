/*
Given an arr of positive numbers and postive number 'k', find the maximum sum of any contiguous subarray of size k.

O(n)t | O(1)s
*/

function maxSubArrSizeK(arr, k) {
	let start = 0
	let subSum = 0
	let maxSum = 0

	for (let end = 0; end < arr.length; end++) {
		subSum += arr[end]

		if (1 + end - start > k) {
			subSum -= arr[start]
			start++
		}

		maxSum = Math.max(maxSum, subSum)
	}
	return maxSum
}

console.log(maxSubArrSizeK([2, 1, 5, 1, 3, 2], 3))
console.log(maxSubArrSizeK([2, 3, 4, 1, 5], 2))
