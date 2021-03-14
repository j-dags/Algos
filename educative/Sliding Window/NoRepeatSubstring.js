// function noRepeatSubstring(str) {
// 	let chars = []
// 	let maxLength = 0

// 	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
// 		let char = str[windowEnd]
// 		while (chars.includes(char)) {
// 			chars.shift() // will shift have a larger time complexity?
// 		}

// 		chars.push(char)
// 		maxLength = Math.max(chars.length, maxLength)
// 	}
// 	return maxLength
// }

function noRepeatSubstring(str) {
	let charIndexMap = {} // hash table will store the index of each character (character serves as the key)
	let maxLength = 0
	let windowStart = 0

	// Iterate through str
	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		let char = str[windowEnd]

		// If we've seen this character before, set windowStart to the rightmost value of either windowStart or the index of said char + 1
		if (char in charIndexMap) {
			windowStart = Math.max(windowStart, 1 + charIndexMap[char])
		}

		// Save the character and its index into the map
		charIndexMap[char] = windowEnd
		// Keep track of max length
		maxLength = Math.max(maxLength, 1 + windowEnd - windowStart)
	}
	return maxLength
}

console.log(noRepeatSubstring('aabccbb'))
console.log(noRepeatSubstring('abbbb'))
console.log(noRepeatSubstring('abccde'))
console.log(noRepeatSubstring('abcdefghijklmnopqrstuvwxyzjkl;;oijkl;'))
