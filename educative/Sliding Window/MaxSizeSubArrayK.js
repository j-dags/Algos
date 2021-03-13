function maxSizeSubArr(k, arr) {
	let maxSum = 0
	let windowSum = 0
	let windowStart = 0
	for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
		windowSum += arr[windowEnd]

		if (windowEnd >= k - 1) {
			maxSum = Math.max(maxSum, windowSum)
			windowSum -= arr[windowStart]
			windowStart++
		}
	}
	return maxSum
}

/*
Instead of calculating a k-length some for each index of arr (which has n * k time complexity), we keep a running sum as we traverse array.
As we slide window, remove first element in window and add new element at the end. This reduces the time complexity.

TIME: O(n)
SPACE: O(1)

*/
console.log(maxSizeSubArr(2, [2, 3, 4, 1, 5]))
