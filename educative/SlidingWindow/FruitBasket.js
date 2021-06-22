function FruitBasket(arr) {
	let hashMap = {}
	let windowStart = 0
	let maxFruit = 0

	for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
		let char = arr[windowEnd]
		if (!hashMap[char]) hashMap[char] = 1
		else hashMap[char]++

		while (Object.keys(hashMap).length > 2) {
			char = arr[windowStart]
			hashMap[char]--
			if (!hashMap[char]) delete hashMap[char]
			windowStart++
		}
	return maxFruit
}

console.log(FruitBasket(['A', 'B', 'C', 'A', 'C']))
console.log(FruitBasket(['A', 'B', 'C', 'B', 'B', 'C']))

// Same problem as LongestSubstring. This just has fixed k=2

// TIME: O(n)
// SPACE: O(1) - maximum of three types of fruit in the hash map
