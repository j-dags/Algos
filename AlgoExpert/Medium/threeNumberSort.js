function threeNumberSort(array, order) {
	let fPtr = 0
	let sPtr = 0
	let tPtr = array.length - 1

	while (sPtr <= tPtr) {
		let position = order.indexOf(array[sPtr])
		if (position === 0) {
			swap(fPtr, sPtr, array)
			sPtr++
			fPtr++
		} else if (position === 1) sPtr++
		else {
			swap(sPtr, tPtr, array)
			tPtr--
		}
	}
	return array
}

function swap(a, b, array) {
	const temp = array[b]
	array[b] = array[a]
	array[a] = temp
}

// TIME: O(n) - iterate through array once
// SPACE: O(1) - sort in place
