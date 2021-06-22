function checkPermutation(str, pattern) {
	let matches = 0
	let windowStart = 0
	let charFreq = {}

	// Put pattern into a hash
	for (const letter of pattern) {
		if (!charFreq[letter]) charFreq[letter] = 0
		charFreq[letter]++
	}

	// iterate through str
	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		let rightChar = str[windowEnd]
		// If the rightmost letter is also in the pattern, decrement said letter in hash map
		// If any letter freq === 0 in the hash map, increment matches
		if (rightChar in charFreq) {
			charFreq[rightChar]--
			if (!charFreq[rightChar]) matches++
		}

		// Max window size is width of pattern
		// When a letter leaves the window, incrememnt hashmap and matches accordingly
		while (1 + windowEnd - windowStart > pattern.length) {
			let leftChar = str[windowStart]
			if (leftChar in charFreq) {
				if (!charFreq[leftChar]) matches--
				charFreq[leftChar]++
			}
			windowStart++
		}

		// Return 'match' if all hashmap frequencies === 0
		if (matches === pattern.length) return true
	}

	return false
}

/*
Goal: see if the str contains any permutation of the pattern as a substring.
Approach:
1. put pattern in hash
2. iterate through str, if right char in pattern, decrement hash
3. if charFreq[letter] === 0, increment match
4. if match.length === pattern.length return true
5. shrink window: if leftChar in charFreq, charFreq[leftChar]++. If charFreq[leftChar] was 0, match--

TIME: O(n + m) n=str, m=pattern. We have to iterate through M to populate charFreq at the beginning of the function
SPACE: O(m) M populates charFreq object
*/

console.log(checkPermutation('oidbcaf', 'abc'))
console.log(checkPermutation('odicf', 'dc'))
console.log(checkPermutation('aaacb', 'abc'))
