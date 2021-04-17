function sortedSquaredArray(array) {
	// Square numbers, then sort
	return array.map((el) => el ** 2).sort((a, b) => a - b);
}

// TIME - O(nlogn). I believe sort and map are nlogn
// SPACE - O(n). Don't believe sort or map mutate in place
