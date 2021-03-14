// function checkPermutation(str, pattern) {
// 	let windowStart = 0
// 	let hashMap = {}

// 	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
// 		let rightChar = str[windowEnd]

// 		// Save right character to hash map
// 		if (!hashMap[rightChar]) hashMap[rightChar] = 0
// 		hashMap[rightChar]++

// 		// Shrink window when window size is greater than pattern length
// 		while (1 + windowEnd - windowStart > pattern.length) {
// 			let leftChar = str[windowStart]
// 			hashMap[leftChar]--
// 			if (!hashMap[leftChar]) delete hashMap[leftChar]
// 			windowStart++
// 		}

// 		// Check if all letters in pattern are currently in the hash map
// 		let match = [...pattern].reduce(
// 			(acc, idx) => acc && Object.keys(hashMap).includes(idx),
// 			true
// 		)
// 		if (match) return true
// 	}

// 	return false
// }

function checkPermutation(str, pattern) {
	let matches = 0
	let windowStart = 0
	let charFreq = {}

	for (const letter of pattern) {
		if (!charFreq[letter]) charFreq[letter] = 0
		charFreq[letter]++
	}

	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		let rightChar = str[windowEnd]
		if (rightChar in charFreq) {
			charFreq[rightChar]--
			if (!charFreq[rightChar]) matches++
		}

		while (1 + windowEnd - windowStart > pattern.length) {
			let leftChar = str[windowStart]
			if (leftChar in charFreq) {
				if (!charFreq[leftChar]) matches--
				charFreq[leftChar]++
			}
			windowStart++
		}

		if (matches === pattern.length) return true
	}

	return false
}
/*
Goal: see if the str contains any permutation of the pattern as a substring.
Approach:
1. put pattern in hash
2. iterate through array, if right char in pattern, decrement hash
3. if charFreq[letter] === 0, increment match
4. if match.length === pattern.length return true
5. shrink window: if leftChar in charFreq, charFreq[leftChar]++. If charFreq[leftChar] was 0, match--



*/
console.log(checkPermutation('oidbcaf', 'abc'))
console.log(checkPermutation('odicf', 'dc'))
console.log(checkPermutation('aaacb', 'abc'))
