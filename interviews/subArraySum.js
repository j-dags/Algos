/*
Prompt:
Given an array of integers, find the sum of all elements of all subarrays of that array.

Ex:
[4,5,6]
4 + 5 + 6 + (4 + 5) + (4 + 5 + 6) + (5 + 6) = 50

Approach:

Naive
Nested for loop. Build up the subarray of permutations, while we're building subarray add the current subarray to the sum

Optimized:
Math. For an array [1, 2, 3, ....n] each element will appear [n, n+1, n+2, ...n] times. We can multiply these two arrays (dot product?) to find the answer.


*/

const subArraySum = (arr) => {
	let n = arr.length
	let sum = 0

	for (let i = 0; i < n; i++) {
		sum += arr[i] * (i + 1) * (n - i)
	}
	return sum
}

console.log(subArraySum([4, 5, 6]))
