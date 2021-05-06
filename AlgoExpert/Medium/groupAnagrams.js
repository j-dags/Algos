function groupAnagrams(words) {
	const memo = {}

	for (const word of words) {
		let sortedWord = word.split('').sort().join('')

		if (!(sortedWord in memo)) memo[sortedWord] = []
		memo[sortedWord].push(word)
	}
	return Object.values(memo)
}

/*
Problem: given an arr of words, return the arr but grouped by anagrams
Approach: sort each word alphabetically and use a memo/cache to check if we've already seen an anagram.

O(w * nlog(n))t | O(w * n)s
For time we need to sort (nlogn) each word. For space the cache will take up words * longest word length space.
*/
