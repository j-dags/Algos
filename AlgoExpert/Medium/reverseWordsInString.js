function reverseWordsInString(string) {
	let words = string.match(/\S+/g)
	let spaces = string.match(/\s+/g)
	if (!words || !spaces) return string

	const endsWithSpace = string[string.length - 1] === ' ' ? true : false
	let revString = []

	for (let i = words.length - 1; i >= 0; i--) {
		if (endsWithSpace) {
			revString.push(spaces.pop())
			revString.push(words.pop())
		} else {
			revString.push(words.pop())
			revString.push(spaces.pop())
		}
	}
	return revString.join('')
}

// TIME: O(n) - actually I'm not sure about time complexity of regex
// SPACE: O(n) - actually I'm not sure about time complexity of regex

// Do not edit the line below.
exports.reverseWordsInString = reverseWordsInString
