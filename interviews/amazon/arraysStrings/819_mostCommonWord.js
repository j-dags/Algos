/*
Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase.

Approach:
1. Lower case paragraph and split on non-alphanumeric characters
2. Iterate through array: Skip over banned words and empty words.
3. Return most frequent word in hashmap

O(nlogn)t | O(n)s
*/

var mostCommonWord = function (paragraph, banned) {
	const hash = {}
	const arr = paragraph.toLowerCase().split(/\W/)

	for (let word of arr) {
		if (!word || banned.includes(word)) continue
		word in hash ? hash[word]++ : (hash[word] = 1)
	}
	return Object.keys(hash).sort((a, b) => hash[b] - hash[a])[0]
}

const test = [
	'Bob hit a ball, the hit BALL flew far after it was hit.',
	['hit'],
]
const test2 = ['a, a, a, a, b,b,b,c, c', ['a']]

console.log(mostCommonWord(test[0], test[1]))
console.log(mostCommonWord(test2[0], test2[1]))
