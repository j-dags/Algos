function longestSubstring(k, str) {
	let maxLength = 0
	let maxChar = 0
	let windowStart = 0
	let hashMap = {}

	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		let rightChar = str[windowEnd]

		// Add current element to hashMap, create key if necessary.
		if (!hashMap[rightChar]) hashMap[rightChar] = 0
		hashMap[rightChar]++
		// maxChar keeps a running count of the most repetitive character
		maxChar = Math.max(maxChar, hashMap[rightChar])

		// Ignoring most repetitive character, if the rest of the chars > k, shrink window
		while (1 + windowEnd - windowStart - maxChar > k) {
			let leftChar = str[windowStart]
			hashMap[leftChar]--
			windowStart++
		}

		maxLength = Math.max(maxLength, 1 + windowEnd - windowStart)
	}
	return maxLength
}

// TIME: O(n)
// SPACE: O(1) assuming only lowercase alphabet chars, space complexity will be O(26) -> O(1)

console.log(longestSubstring(2, 'aabccbb'))
console.log(longestSubstring(1, 'abbcb'))
console.log(longestSubstring(1, 'abccde'))
