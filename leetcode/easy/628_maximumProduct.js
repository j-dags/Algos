/*
Return the max product of any three numbers in an array. Note that the numbers can be negative which complicates things.

Approach:
Sort the array. The max product can either be the last the integers, or the first two integers (large negative numbers) times the last number

O(nlogn)t | O(logn)s . Sorting takes logn space
*/

var maximumProduct = function (nums) {
	nums.sort((a, b) => a - b)

	return Math.max(
		nums[0] * nums[1] * nums[nums.length - 1],
		nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
	)
}

console.log(maximumProduct([-100, -98, -1, 2, 3, 4]))
