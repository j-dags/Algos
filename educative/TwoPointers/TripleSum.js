//3/29/21

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

console.log(TripleSum([-3, 0, 1, 2, -1, 1, -2]))
console.log(TripleSum([-5, 2, -1, -2, 3]))
console.log(TripleSum([-2, 0, 1, 1, 2]))
console.log(TripleSum([-1, 0, 1, 2, -1, -4]))
console.log(TripleSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]))

// TIME: O(n^2). We essentially have nested loops
// SPACE: O(n). At most we could have a 3n array, which reduces to n.
