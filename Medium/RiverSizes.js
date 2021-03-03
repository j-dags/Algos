function riverSizes(matrix) {
	let sizes = [];
	for (const row in matrix) {
		for (const col in matrix[row]) {
			if (matrix[row][col])
				sizes.push(checkAdjacent(parseInt(row), parseInt(col), matrix));
		}
	}
	return sizes;
}

function checkAdjacent(row, col, matrix) {
	matrix[row][col] = 0; // set river to 0. Acts as history validation
	let sizes = 1; // minimum river size

	const adjacent = [
		[row - 1, col],
		[row + 1, col],
		[row, col - 1],
		[row, col + 1],
	];
	for (const [i, j] of adjacent) {
		if (matrix[i] && matrix[i][j]) sizes += checkAdjacent(i, j, matrix);
	}
	return sizes;
}

// Time O(w*h)where w is width and and h is height of the matrix. We visit every node once as we iterate through the array, which gives us O(w*h). We have the possibility of visiting each node up to four additional times. This is due to the fact that at every node, we might need to check the four surrounding nodes to see if they might be part of a river. But note, checking a node is a constant time operation and we perform it at most four times. So time complexity is still O(wh).
// Space O(w*h) where w is width and and h is height of the matrix. This is due to the callstack. Consider a worst case situation in which every node is a part of the same river. The callstack would have a recursive function call for every node before resolving.
