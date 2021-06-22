/*
Check if two strings are anagrams.

Approach: Fill a hashmap with one string, then empty hashmap using other string. Return if object is empty or not.
O(n)t | O(w)s - Where w is the max length of a string
*/

var validAnagram = function (s, t) {
	if (s.length !== t.length) return false

	let memo = {}
	for (const letter of s) {
		if (!memo[letter]) memo[letter] = 0
		memo[letter]++
	}
	for (const letter of t) {
		memo[letter]--
		if (!memo[letter]) delete memo[letter]
	}
	return Object.keys(memo).length === 0
}
