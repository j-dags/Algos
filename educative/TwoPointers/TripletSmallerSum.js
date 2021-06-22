const TripletSmallerSum = (arr, target) => {
	let count = 0
	// sort input arr
	arr = arr.sort((a, b) => a - b)

	// iterate through array
	for (let left = 0; left < arr.length - 2; left++) {
		// two pointer problem
		let middle = left + 1
		let right = arr.length - 1

		while (middle < right) {
			let currSum = arr[left] + arr[middle] + arr[right]

			// we're looking for smaller sums. since it's sorted, if the sum is less than target, then we know that for any smaller value of right the sum will be valid.
			if (currSum < target) {
				count += right - middle
				middle++
			} else right--
		}
	}
	return count
}

console.log(TripletSmallerSum([-1, 0, 2, 3], 3))
console.log(TripletSmallerSum([-1, 4, 2, 1, 3], 5))

// TIME: O(n^2)
// SPACE: O(n)
