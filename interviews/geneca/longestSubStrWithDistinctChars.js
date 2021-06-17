/*
Given a string, find the length of the longest substring in it with no more than k distinct chars.

O(n)t | O(k)s
*/

function longestSubStrWithDistinctiChars(str, k) {
	let start = 0
	let maxLength = 0
	let memo = {}

	for (let end = 0; end < str.length; end++) {
		// save leading value into memo
		if (!(str[end] in memo)) memo[str[end]] = 0
		memo[str[end]]++

		// shrink window
		if (Object.values(memo).length > k) {
			memo[str[start]]--
			if (!memo[str[start]]) delete memo[str[start]]
			start++
		}

		maxLength = Math.max(maxLength, 1 + end - start)
	}
	return maxLength
}

console.log(longestSubStrWithDistinctiChars('araaci', 2))
console.log(longestSubStrWithDistinctiChars('araaci', 1))
console.log(longestSubStrWithDistinctiChars('cbbebi', 3))
