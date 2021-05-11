/**
Prompt: Given an array of 1s and 0s, find the most consecutive 1s in the array if you're allowed to flip one 0.

Approach: Sliding window. Keep track of how many 0s are in the window and shrink window when there are more than 1 0.

O(n)t | O(1)s. Need to iterate through each index. No additional space needed.
 */

var findMaxConsecutiveOnes = function (nums) {
	let max = 0
	let start = 0
	let numZeros = 0 // counter to keep track of 0s

	for (let end = 0; end < nums.length; end++) {
		if (nums[end] === 0) numZeros++ // increment numZeros when we see a 0

		// shrink window while numZeros > 1
		while (numZeros > 1) {
			if (nums[start] === 0) numZeros--
			start++
		}
		max = Math.max(max, 1 + end - start)
	}
	return max
}
