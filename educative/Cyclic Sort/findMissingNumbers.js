/*
Prompt: Given an array of integers from 1 to n (which contains duplicates), find the missing numbers.

Approach: Will use cyclic sort to sort the numbers to match their indices. Afterwards, any index whose value does not match the index will be return. Those are our missing numbers.

O(n)t | O(n)s. Need to hit each number in the index. Worst case, n-1 numbers are missing so O(n) spaced required. IF we ignore the output array, then O(1) space.
*/

const findMissingNumbers = (arr) => {
	// loop through each index
	for (let i = 0; i < arr.length; i++) {
		// get values of current index and target index
		let target = arr[i] - 1
		let targetVal = arr[target]

		// keep swapping current and target indices until either: a) the current value is correct or b) both index values are the same
		while (arr[i] !== targetVal && target !== i) {
			arr[target] = arr[i]
			arr[i] = targetVal

			// resassign target value and index
			target = arr[i] - 1
			targetVal = arr[target]
		}
	}

	// return any index whos value does not match the index
	return arr.reduce((acc, el, idx) => {
		if (el - 1 !== idx) acc.push(idx + 1)
		return acc
	}, [])
}

console.log(findMissingNumbers([2, 3, 1, 8, 2, 3, 5, 1]))
console.log(findMissingNumbers([2, 4, 1, 2]))
console.log(findMissingNumbers([2, 3, 2, 1]))

// Alternative solutions
// var missingNumber = function(nums) {
//     let sum = 0, total = 0
//     for(let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//         total += i + 1
//     }
//     return total - sum
// };