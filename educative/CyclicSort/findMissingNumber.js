/*
Prompt: Given an array of 'n' distinct numbers taken from the range 0 to 'n', find the missing number. Since there are a total of n+1 numbers.

Approach: Iterate through the loop. For each index, we keep swapping the current index with its target value until we get either 'n' in our current index, or the current and target match (prevent infinite loop here). We do this for each index. This way, our 'n' value will be store at the index of the missing value.

Afterwards, we iterate through the loop and if the index does not equal the value then we have found our missing value.

O(n)t | O(1)s


*/

const findMissingNumber = (arr) => {
	let i = 0

	// While loop. Keep swapping current index until it either the value at the current index = 0 or is the swap at the target.
	while (i < arr.length) {
		j = arr[i]
		// Only swap is arr[i] is less than n and it does not match the target value
		if (arr[i] < arr.length && arr[i] !== arr[j])
			// Swap current and target. Shorthand notation.
			[arr[i], arr[j]] = [arr[j], arr[i]]
		else i++
	}

	for (i = 0; i < arr.length; i++) {
		if (i !== arr[i]) return i
	}
	return arr.length
}

console.log(findMissingNumber([4, 0, 3, 1]))
console.log(findMissingNumber([8, 3, 5, 2, 4, 6, 0, 1]))

// Alternative solutions
// var missingNumber = function(nums) {
//     let sum = 0, total = 0
//     for(let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//         total += i + 1
//     }
//     return total - sum
// };
