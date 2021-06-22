const wordsConcatenation = (str, words) => {
	let windowStart = 0
	let matches = 0
	let charFreq = {}
	let anagramPosition = []

	// concat words and push to hash
	let hashWord = words.join('')
	for (const letter of hashWord) {
		if (!charFreq[letter]) charFreq[letter] = 0
		charFreq[letter]++
	}

	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		let rightChar = str[windowEnd]
		if (rightChar in charFreq) charFreq[rightChar]--
		if (charFreq[rightChar] === 0) matches++

		// shrink window
		while (hashWord.length < 1 + windowEnd - windowStart) {
			let leftChar = str[windowStart]
			if (leftChar in charFreq) {
				if (!charFreq[leftChar]) matches--
				charFreq[leftChar]++
			}
			windowStart++
		}

		console.log(windowStart, windowEnd, matches, hashWord.length)
		if (matches === hashWord.length) anagramPosition.push(windowStart)
	}
	return anagramPosition
}

console.log(wordsConcatenation('catfoxcat', ['cat', 'fox']))
