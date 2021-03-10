function searchInSortedMatrix(matrix, target) {
	let row = 0
	let col = matrix[0].length - 1

	while (row < matrix.length && col >= 0) {
		if (matrix[row][col] < target) row++
		else if (matrix[row][col] > target) col--
		else return [row, col]
	}
	return [-1, -1]
}

// TIME: O(n + m) - max search length is height + width
// SPACE: O(1)
