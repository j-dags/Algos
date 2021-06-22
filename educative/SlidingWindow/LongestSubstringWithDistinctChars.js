function longestSubstring(k, str) {
	let maxLength = 0
	let windowStart = 0
	let hashMap = {}

	// Iterate through string
	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		// If key doesnt exist in hash, create key and set value to 1. Else increment value
		if (!hashMap[str[windowEnd]]) hashMap[str[windowEnd]] = 1
		else hashMap[str[windowEnd]]++

		// If # of distinct chars > k, shrink window. Decrement value in hash and remove key if value === 0
		while (Object.keys(hashMap).length > k) {
			hashMap[str[windowStart]]--
			if (hashMap[str[windowStart]] === 0) delete hashMap[str[windowStart]]
			windowStart++
		}
		// Keep track of max window size
		maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
	}
	return maxLength
}

console.log(longestSubstring(2, 'araaci'))
console.log(longestSubstring(1, 'araaci'))
console.log(longestSubstring(3, 'cbbebi'))

/*
Approach:
Use a hashmap
1. Insert chars into hashmap until hashmap has k distinctinct chars
2. Check if window length > max length so far
3. Shrink window (slide window start right)
4. Once there are k or less distinct chars, grow window
5. Increment/decrement hashmap as we go
*/

// TIME: O(n)
// SPACE: O(k)
