function removeIslands(matrix) {
	// Create answer matrix
	const ans = JSON.parse(JSON.stringify(matrix));

	// Iterate through matrix
	for (let row = 1; row < matrix.length - 1; row++) {
		for (let col = 1; col < matrix[row].length - 1; col++) {
			// If current element is an island, set element to 0 on the answer matrix
			if (checkIsland(row, col, matrix) === true) ans[row][col] = 0;
		}
	}
	return ans;
}

// Recursively checks if a given index is an island
function checkIsland(row, col, matrix) {
	// Make a copy of the matrix b/c we mutate the matrix as we go
	const arr = JSON.parse(JSON.stringify(matrix));
	const isEdge =
		row === 0 ||
		row >= matrix.length - 1 ||
		col === 0 ||
		col >= matrix[0].length - 1;
	// Zeros return true
	if (arr[row][col] === 0) return true;
	// If we hit a value of one at an edge of the matrix, return false
	if (arr[row][col] === 1 && isEdge) {
		// Set index value to 0 so we don't recurse indefinitely
		arr[row][col] = 0;
		return false;
	}
	if (!isEdge) {
		// Set index value to 0 so we don't recurse indefinitely
		arr[row][col] = 0;
		// If current index 1 and not an edge, keep checking neighbors
		return (
			checkIsland(row - 1, col, arr) &&
			checkIsland(row + 1, col, arr) &&
			checkIsland(row, col - 1, arr) &&
			checkIsland(row, col + 1, arr)
		);
	}
}
