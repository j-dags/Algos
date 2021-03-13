function smallestSubArr(s, arr) {
	let windowStart = 0
	let windowEnd = 0
	let windowSum = arr[0]
	let minLength = Infinity

	while (windowEnd < arr.length) {
		// Slide window end right while sum is less than target
		if (windowSum < s) {
			windowEnd++
			windowSum += arr[windowEnd]
		}
		// Slide window start right while sum is greater than target. Check min length
		else if (windowSum >= s) {
			minLength = Math.min(minLength, windowEnd - windowStart + 1)
			windowSum -= arr[windowStart]
			windowStart++
		}
	}
	return minLength
}

smallestSubArr(7, [2, 1, 5, 2, 3, 2])
smallestSubArr(7, [2, 1, 5, 2, 8])
smallestSubArr(8, [3, 4, 1, 1, 6])

// TIME: O(n + n) -> O(n). I think the windowEnd iterates through all elements and so does windowStart (albeit separately), hence O(n + n)
// SPACE: O(1)
