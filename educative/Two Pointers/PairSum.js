const PairSum = (arr, target) => {
	let left = 0
	let right = arr.length - 1

	while (left < right) {
		const sum = arr[left] + arr[right]
		if (sum === target) return [left, right]
		else if (sum < target) left++
		else right--
	}
	return false
}

console.log(PairSum([1, 2, 3, 4, 6], 6))
console.log(PairSum([2, 5, 9, 11], 11))

/*
TIME: O(N) - iterate through all elements
SPACE: O(1) - variables don't scale
*/
