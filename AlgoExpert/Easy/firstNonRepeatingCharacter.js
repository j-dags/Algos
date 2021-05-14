/*
Find the index of the first non repeating character. Return -1 if it doesn't exist.

Approach:
Make a memo. Then iterate again through the loop and check if the memo value of that char is 1 or less.

O(n)t | O(n)s
*/

function firstNonRepeatingCharacter(string) {
	const memo = {}

	// fill memo
	for (const char of string) {
		if (!memo[char]) memo[char] = 0
		memo[char]++
	}
	// check letters
	for (let i = 0; i < string.length; i++) {
		if (memo[string[i]] < 2) return i
	}
	return -1
}
