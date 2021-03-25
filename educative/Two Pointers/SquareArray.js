const SquareArray = (arr) => {
	let left = 0
	let right = arr.length - 1
	let ptr = arr.length - 1
	let squares = [...arr]
	while (left <= right) {
		let leftSqr = arr[left] ** 2
		let rightSqr = arr[right] ** 2

		if (leftSqr >= rightSqr) {
			squares[ptr] = leftSqr
			left++
		} else {
			squares[ptr] = rightSqr
			right--
		}
		ptr--
	}
	return squares
}

console.log(SquareArray([-2, -1, 0, 2, 3]))
console.log(SquareArray([-3, -1, 0, 1, 2]))

// TIME: O(n) - iterate through array
// SPACE: O(n) - squares scales w/ array
