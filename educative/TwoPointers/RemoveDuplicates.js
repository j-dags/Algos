const arr = [0, 1, 2, 3, 4, 5]
arr.splice(2, 1)

const RemoveDuplicates = (arr) => {
	for (let left = 0; left < arr.length - 1; left++) {
		let right = left + 1
		while (arr[left] === arr[right]) arr.splice(left, 1)
	}
	return arr.length
}

console.log(arr)
console.log(RemoveDuplicates([1, 2, 3, 4, 5, 5, 5, 5]))
console.log(RemoveDuplicates([2, 3, 3, 3, 6, 9, 9]))
console.log(RemoveDuplicates([2, 2, 2, 11]))

// TIME: O(n)
// SPACE: O(1)
