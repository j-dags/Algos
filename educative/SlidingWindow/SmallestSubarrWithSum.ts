function smallestSubArr(s: number, arr: number[]) {
	let start = 0
	let end = 0
	let windowSum = arr[0]
	let minLength = Infinity

	while (end < arr.length) {
		if (windowSum < s) {
			end++
			windowSum += arr[end]
		} else if (windowSum >= s) {
			minLength = Math.min(minLength, end - start + 1)
			windowSum -= arr[start]
			start++
		}
	}
	return minLength
}

console.log(smallestSubArr(7, [2, 1, 5, 2, 3, 2]))
console.log(smallestSubArr(7, [2, 1, 5, 2, 8]))
console.log(smallestSubArr(8, [3, 4, 1, 1, 6]))
