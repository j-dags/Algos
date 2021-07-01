/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

O(n**2)t | O(n)s
*/

var TripleSum = function (nums) {
	let ans = []
	nums = nums.sort((a, b) => a - b)

	for (let left = 0; left < nums.length - 2; left++) {
		if (nums[left] > 0) break
		if (nums[left] === nums[left - 1]) continue

		let mid = left + 1
		let right = nums.length - 1

		while (mid < right) {
			const currSum = nums[left] + nums[mid] + nums[right]
			const currArr = [nums[left], nums[mid], nums[right]]

			if (currSum === 0) {
				ans.push(currArr)

				// inc mid until we get unique value
				while (mid < right && nums[mid] === currArr[1]) mid++
				// dec right until we get unique value
				while (mid < right && nums[right] === currArr[2]) right--
			} else if (currSum < 0) mid++
			else right--
		}
	}
	return ans
}
