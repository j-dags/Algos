const StringAnagrams = (str, pattern) => {
	/*
  1. declare variables
  2. save pattern to hash
  3. looper through array
  4. handle rightmost letter
  5. handle leftmost letter
  6. check if match
  */

	let matches = 0
	let windowStart = 0
	const anagramPosition = []
	const charFreq = {}

	// save pattern to hash
	for (const letter of pattern) {
		if (!charFreq[letter]) charFreq[letter] = 0
		charFreq[letter]++
	}

	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		// handle rightmost letter
		let rightChar = str[windowEnd]
		if (rightChar in charFreq) charFreq[rightChar]--
		if (!charFreq[rightChar]) matches++

		// handle leftmost letter
		while (1 + windowEnd - windowStart > pattern.length) {
			let leftChar = str[windowStart]
			if (leftChar in charFreq) {
				if (!charFreq[leftChar]) matches--
				charFreq[leftChar]++
			}
			windowStart++
		}

		// check if match
		if (matches === pattern.length) anagramPosition.push(windowStart)
	}

	return anagramPosition
}

console.log(StringAnagrams('ppqp', 'pq'))
console.log(StringAnagrams('abbcabc', 'abc'))
