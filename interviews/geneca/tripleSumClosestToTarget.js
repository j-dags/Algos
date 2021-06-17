/*
Given an array of unsorted numbers and a target, find a triplet in the array who sum is as close to the target as possible.

[-2, 0, 1, 2], 2 // 1

Approach:
Iterate through each element, then do a pairSum

O(n^2)t | O(n)s
*/

function tripleSumClosestToTarget(arr, target) {
	if (arr.length < 3) return -1
	let sum = Infinity
	arr.sort((a, b) => a - b)

	for (let left = 0; left < arr.length - 2; left++) {
		let mid = left + 1
		let right = arr.length - 1

		while (mid < right) {
			let currSum = arr[left] + arr[mid] + arr[right]
			if (currSum === target) return 0

			if (Math.abs(target - currSum) < Math.abs(target - sum)) sum = currSum

			if (currSum < target) mid++
			else right--
		}
	}
	return sum
}

console.log(tripleSumClosestToTarget([-2, 0, 1, 2], 2))
console.log(tripleSumClosestToTarget([-3, -1, 1, 2], 1))
console.log(tripleSumClosestToTarget([1, 0, 1, 1], 100))
