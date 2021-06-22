function replaceOnes(k, arr) {
	let maxLength = 0
	let zerosCnt = 0 // keep track of how many zeros are in the window
	let windowStart = 0

	// Iterate through array
	for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
		let rightVal = arr[windowEnd]

		if (!rightVal) zerosCnt++ // If we hit a zero, increment counter

		// If there are more zeros than allowed, shrink window
		while (zerosCnt > k) {
			let leftVal = arr[windowStart]

			if (!leftVal) zerosCnt--
			windowStart++
		}

		// Keep track of max
		maxLength = Math.max(maxLength, 1 + windowEnd - windowStart)
	}
	return maxLength
}

// Time: O(n) iterate through array. Window end and start independent. At most O(n+n) -> O(n)
// Space: O(1)

console.log(replaceOnes(2, [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1]))
console.log(replaceOnes(3, [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1]))
