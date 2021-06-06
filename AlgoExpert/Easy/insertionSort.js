function insertionSort(arr) {
	for (i in arr) {
		let j = i
		while (arr[j] < arr[j - 1]) {
			swap(j, j - 1, arr)
			j--
		}
	}
	return arr
}

function swap(i, j, arr) {
	let holder = arr[i]
	arr[i] = arr[j]
	arr[j] = holder
}
