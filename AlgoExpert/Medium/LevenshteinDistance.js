function levenshteinDistance(str1, str2) {
	str2 = ' ' + str2
	str1 = ' ' + str1
	const distances = [...Array(str1.length)].map(() =>
		Array(str2.length).fill(0)
	)

	for (let row = 0; row < str1.length; row++) {
		for (let col = 0; col < str2.length; col++) {
			if (row === 0) distances[row][col] = col
			else if (col === 0) distances[row][col] = row
			else if (str2[col] === str1[row])
				distances[row][col] = distances[row - 1][col - 1]
			else {
				distances[row][col] =
					1 +
					Math.min(
						distances[row][col - 1],
						distances[row - 1][col],
						distances[row - 1][col - 1]
					)
			}
		}
	}
	return distances[str1.length - 1][str2.length - 1]
}

// TIME: O(n*m)
// SPACE: O(n*m)

// Do not edit the line below.
exports.levenshteinDistance = levenshteinDistance
