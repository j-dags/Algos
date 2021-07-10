/*
A peak element is an element that is strictly greater than its neighbors. Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞.
You must write an algorithm that runs in O(log n) time.

Approach:
Similar to two pointer approach of pairSum. We find the mid point between left and right pointers. If the slope at midpoint is ascending, that means there is a peak to the right of the midpoint, so we move the left pointer to midpoint + 1. If the slope at the midpoint is descending, that means peak to left, so we move the right pointer to the midpoint. Eventually left and right will meet at the peak.

O(logn)t | O(1)s
*/

const findPeakElement = (array: number[]) => {
	let left = 0
	let right = array.length - 1

	while (left < right) {
		let mid = Math.floor((left + right) / 2)
		// If slope is descending at mid, shrink window aka move right to mid
		if (array[mid] > array[mid + 1]) right = mid
		// If slope is ascending, move left to mid + 1. Note we can safely move left to mid + 1 because we verified array[num + 1] > array[m]
		else left = mid + 1
	}
	return left
}
// console.log(findPeakElement([1, 2, 3, 1]))
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]))
