const DutchFlag = (arr) => {
	let low = 0
	let high = arr.length - 1
	let mid = 0

	while (mid <= high) {
		// If arr[mid] is a 0, swap with low pointer
		if (arr[mid] === 0) {
			arr[mid] = arr[low]
			arr[low] = 0
			low++
			mid++
		}
		// If arr[mid] is a 2, swap with high pointer
		else if (arr[mid] === 2) {
			arr[mid] = arr[high]
			arr[high] = 2
			high--
		}
		// If arr[mid] is a 1, ignore
		else mid++
	}
	return arr
}

/*
Approach: Have three pointers: low, mid, high. low tracks 0s, high tracks 2s, mid tracks current number. If arr[mid] === 0 or 2, swap w/ low or high accordinly. If arr[mid] === 1, onto next number. While (mid <= high) because they need to be able to overlap in the case that mid === high and mid needs to swap mid - 1

TIME: O(n) - only check each number once?
SPACE: O(1)
*/

// console.log(DutchFlag([1, 0, 2, 1, 0]))
console.log(DutchFlag([2, 2, 0, 1, 2, 0]))
