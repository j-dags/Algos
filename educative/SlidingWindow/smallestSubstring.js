/*

1. fill hashmap with pattern
2. iterate through array
3. update hash and matches accordingly
4. while matches === pattern.length, shrink window
5. smallest substring = Math.min(smallest substring, window size)

*/

const smallestSubstring = (str, pattern) => {
	let matches = 0
	let windowStart = 0
	let charFreq = {}
	let minLength = Infinity
	let subStrStart = 0

	// popular charFreq w/ pattern
	for (const letter of pattern) {
		if (!charFreq[letter]) charFreq[letter] = 0
		charFreq[letter]++
	}

	// iterate through str
	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		// handle right character
		let rightChar = str[windowEnd]
		if (rightChar in charFreq) {
			charFreq[rightChar]--
			if (!charFreq[rightChar]) matches++
		}

		// shrink window while matches === pattern.length
		while (matches >= pattern.length) {
			if (minLength > 1 + windowEnd - windowStart) {
				minLength = 1 + windowEnd - windowStart
				subStrStart = windowStart
			}

			// typical window shrinking
			let leftChar = str[windowStart]
			if (leftChar in charFreq) {
				if (!charFreq[leftChar]) matches--
				charFreq[leftChar]++
			}
			windowStart++
		}
	}

	return minLength > str.length
		? ''
		: str.substring(subStrStart, subStrStart + minLength)
}

console.log(smallestSubstring('aabdec', 'abc'))
console.log(smallestSubstring('abdbca', 'abc'))
console.log(smallestSubstring('adcad', 'abc'))
