//3/29/21

const TripleSum = (arr, target, first = 0) => {
	let triplets = []
	// sort input array
	arr = arr.sort((a, b) => a - b)
	// iterate through array. each element will serve as left pointer
	for (let left = first; left < arr.length - 2; left++) {
		// declare middle and right pointers. This is essentially a two pointer problem at this point
		let middle = left + 1
		let right = arr.length - 1

		while (middle < right) {
			// Don't skip over duplicated numbers
			// while (arr[middle] === arr[middle - 1]) middle++
			// while (arr[right] === arr[right + 1]) right--

			let currSum = arr[left] + arr[middle] + arr[right]
			let currArr = [arr[left], arr[middle], arr[right]]

			// Save array if === 0, else decrement/increment pointers accordingly
			if (currSum === target && !triplets.includes(currArr))
				triplets.push(currArr)
			if (currSum < 0) middle++
			else right--
		}
	}

	return triplets
}

const QuadrupleSum = (arr, target) => {
	//iterate through array. For each element, el, call TripleSum on arr[el+1, end]
	let quads = []
	arr = arr.sort((a, b) => a - b)

	for (let left = 0; left < arr.length - 3; left++) {
		// for each element in the array, call the TripleSum function on arr[left + 1, end]
		let triples = TripleSum(arr, target - arr[left], left + 1)

		triples.forEach((triplet) => {
			quads.push([arr[left], ...triplet])
		})
	}
	return quads
}

console.log(QuadrupleSum([4, 1, 2, -1, 1, -3], 1))
console.log(QuadrupleSum([2, 0, -1, 1, -2, 2], 2))
