function getPermutations(arr) {
	const permutations = []
	permHelper(0, arr, permutations)
	return permutations
}

function permHelper(i, arr, permutations) {
	if (i === arr.length - 1) permutations.push(arr.slice())
	else {
		for (let j = i; j < arr.length; j++) {
			swap(i, j, arr)
			permHelper(i + 1, arr, permutations)
			swap(i, j, arr)
		}
	}
}

function swap(one, two, arr) {
	let temp = arr[two]
	arr[two] = arr[one]
	arr[one] = temp
}

// TIME: O(n * n!)
// SPACE: O(n * n!)

// Do not edit the line below.
exports.getPermutations = getPermutations
