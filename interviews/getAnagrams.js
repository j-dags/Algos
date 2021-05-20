/*
Given a string that consists of only digits, modify the first half of the string so that it is an anagram of the second half. Determine min number of operations to compelte the task.

Approach:
Hash second half of the string.
For the first half of the string, if hash[char] === 0 then I need to increment a count. We have a mismatch of chars. Return count.
*/

const getAnagrams = (string) => {
	let hash = {}
	let count = 0
	let mid = string.length / 2

	// Fill out hash
	for (let i = mid; i < string.length; i++) {
		if (!hash[string[i]]) hash[string[i]] = 0
		hash[string[i]]++
	}

	// Check first half against hash
	for (let i = 0; i < mid; i++) {
		if (!hash[string[i]]) count++
		else {
			hash[string[i]]--
		}
	}
	return count
}

console.log(getAnagrams('222122'))
console.log(getAnagrams('122122'))
console.log(getAnagrams('123122'))
console.log(getAnagrams('456122'))
