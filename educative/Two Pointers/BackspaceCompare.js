const BackspaceCompare = (str1, str2) => {
	return parseString(str1) === parseString(str2)
}

// Function to parse # from strings
const parseString = (str) => {
	// Iterate in reverse
	for (let right = str.length - 1; right > 0; right--) {
		let left = right - 1

		// If str[left] is not a # but str[right] is, slice the str
		if (str[left] !== '#' && str[right] === '#') {
			str = str.slice(0, left) + str.slice(right + 1)
		}
	}
	return str
}

// TIME: O(n + m). Need to iterate through both strings n and m
// SPACE: O(1)

console.log(BackspaceCompare('xy#z', 'xzz#'))
console.log(BackspaceCompare('xy#z', 'xyz#'))
console.log(BackspaceCompare('xp#', 'xyz##'))
console.log(BackspaceCompare('xywrrmp', 'xywrrmu#p'))
