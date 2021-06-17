/*
Prompt: Given an array of 'n' distinct numbers taken from the range 0 to 'n', find the missing number. Since there are a total of n+1 numbers.

Approach: Iterate through the loop. For each index, we keep swapping the current index with its target value until we get either 'n' in our current index, or the current and target match (prevent infinite loop here). We do this for each index. This way, our 'n' value will be store at the index of the missing value.

Afterwards, we iterate through the loop and if the index does not equal the value then we have found our missing value.

O(n)t | O(1)s
*/

function findMissingNumber(arr) {
	let i = 0

	while (i < arr.length) {
		let j = arr[i] // value of j changes b/c this is 0-index
		if (arr[i] !== arr[j] && j < arr.length) [arr[i], arr[j]] = [arr[j], arr[i]]
		else i++
	}

	for (let i = 0; i < arr.length; i++) {
		if (i !== arr[i]) return i
	}
}

console.log(findMissingNumber([4, 0, 3, 1]))
console.log(findMissingNumber([8, 3, 5, 2, 4, 6, 0, 1]))
