/*
Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:

    Integers in each row are sorted in ascending from left to right.
    Integers in each column are sorted in ascending from top to bottom.


Approach:
Start at the bottom left corner.
While our current element is greater than target, decrement the row.
While our current element is less than the target, increment the column.

This will either get us to our target or go outside the bounds of the matrix.

O(n+m)t | O(1s)
*/

var searchMatrix = function (matrix, target) {
	if (matrix == null || matrix.length < 1 || matrix[0].length < 1) {
		return false
	}
	let x = 0
	let y = matrix.length - 1

	while (matrix[y] && matrix[y][x]) {
		if (matrix[y][x] > target) y--
		else if (matrix[y][x] < target) x++
		else return true
	}

	return false
}

let test = [
	[1, 4, 7, 11, 15],
	[2, 5, 8, 12, 19],
	[3, 6, 9, 16, 22],
	[10, 13, 14, 17, 24],
	[18, 21, 23, 26, 30],
]

console.log(searchMatrix(test, 8))
