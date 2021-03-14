function checkPermutation(str, pattern) {
	let windowStart = 0
	let letterInStr = []

	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		// If leftmost character is not in pattern, shrink window
		while (1 + windowEnd - windowStart > pattern.length) windowStart++
		while (!pattern.includes(str[windowStart])) windowStart++
		// // Check if window is the same size as the pattern string
		if (1 + windowEnd - windowStart === pattern.length) {
			// Define substring
			let substring = str.slice(windowStart, 1 + windowEnd)

			// Check if substring includes each letter of the pattern
			for (const letter of pattern) letterInStr.push(substring.includes(letter))
			// console.log(
			// 	`start: ${windowStart}, end: ${windowEnd}, substring: ${substring}`
			// )
			// console.log('letter in str > ', letterInStr)
			if (letterInStr.reduce((a, b) => a && b)) return true
		}
	}
	// }
	// If letterInStr contains all trues, that means every letter in pattern was present in the substring. Reduce array to either true or false
	return false
}

// console.log([true, true, false].reduce((a, b) => a && b))
console.log(checkPermutation('oidbcaf', 'abc'))
console.log(checkPermutation('odicf', 'dc'))
console.log(checkPermutation('aaacb', 'abc'))
