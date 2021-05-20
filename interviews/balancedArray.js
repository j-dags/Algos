/*
Given an array of numbers, find the index of the smallest array element (the pivot) for which the sums of all elements to the left and right are equal.

Approach:
Have two sums, left sum and right sum. Right sum initially equals sum of whole array. Iterate through the array and add arr[i-1] to leftSum and remove arr[i] from leftSum. Check if two sums are the same

*/

const balancedArray = (arr) => {
	let rightSum = arr.reduce((a, b) => a + b) // RightSum = sum of array
	let leftSum = 0

	for (let i = 0; i < arr.length - 1; i++) {
		if (i > 0) leftSum += arr[i - 1] // Add prev value to leftSum
		rightSum -= arr[i] // Remove current value from rightSum

		if (leftSum === rightSum) return i // Check if they're equal
	}
	return -1
}

console.log(balancedArray([1, 2, 3, 4, 6]))
console.log(balancedArray([1, 1, 1, 2, 3, 1, 1, 1, 2]))
