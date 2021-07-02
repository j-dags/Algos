/*
Given a string s, return the longest palindromic substring in s.

Approach:
1. Iterate through loop. Treat each index like the center of a palindrome.
2. Call a helper function which expands out from the center. (Need to check for even-length and odd-length palindromes)
3. Track longest palindrome as we go.
*/

const longestPalindrome = function (s) {
	let longest = ''

	for (let i = 0; i < s.length; ++i) {
		// check for odd-length palindromes
		let leftOdd = i,
			rightOdd = i
		expand(leftOdd, rightOdd)
		// check for even-length palindromes
		let leftEven = i,
			rightEven = i + 1
		expand(leftEven, rightEven)
	}

	function expand(left, right) {
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			// check for max
			if (1 + right - left > longest.length) longest = s.slice(left, right + 1)
			// increment
			--left
			++right
		}
	}

	return longest
}

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('a'))
console.log(longestPalindrome('ac'))
