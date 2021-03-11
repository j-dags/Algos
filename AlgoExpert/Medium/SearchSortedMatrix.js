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
// video explainer: https://www.algoexpert.io/questions/Search%20In%20Sorted%20Matrix
// Key is in the double-sorted nature of the matrix. We can systematically eliminate columns and rows if we start in the top right corner of matrix. If current value is greater than target, then the entire column can be eliminated. If the current value is less than target, then the entire row can be eliminated. Doing this, we essentially zig zag our way through the matrix to find the value.
