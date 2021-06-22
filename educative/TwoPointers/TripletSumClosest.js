const TripletSumClosest = (arr, target) => {
	if (arr.length < 3) return -1
	let closestSum = Infinity
	arr = arr.sort((a, b) => a - b)

	for (let left = 0; left < arr.length - 2; left++) {
		// Two pointer problem
		let middle = left + 1
		let right = arr.length - 1

		while (middle < right) {
			let currSum = arr[left] + arr[middle] + arr[right]
			if (currSum === target) return 0
			// If current sum is closer than closest, said current sum as new closest sum
			if (Math.abs(target - currSum) < Math.abs(target - closestSum))
				closestSum = currSum
			if (currSum < target) middle++
			else right--
		}
	}

	return closestSum
}

console.log(TripletSumClosest([-2, 0, 1, 2], 2))
console.log(TripletSumClosest([-3, -1, 1, 2], 1))
console.log(TripletSumClosest([1, 0, 1, 1], 100))

// TIME: O(n^2)
// SPACE: O(n)
