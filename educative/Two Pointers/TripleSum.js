//3/29/21

const TripleSum = (arr) => {
	let triplets = []
	// sort input array
	arr = arr.sort((a, b) => a - b)

	// iterate through array. each element will serve as left pointer
	for (let left = 0; left < arr.length - 2; left++) {
		// declare middle and right pointers. This is essentially a two pointer problem at this point
		let middle = left + 1
		let right = arr.length - 1

		while (middle < right) {
			// Skip over duplicated numbers
			while (arr[middle] === arr[middle - 1]) middle++
			while (arr[right] === arr[right + 1]) right--

			let currSum = arr[left] + arr[middle] + arr[right]
			let currArr = [arr[left], arr[middle], arr[right]]

			// Save array if === 0, else decrement/increment pointers accordingly
			if (currSum === 0 && !triplets.includes(currArr)) triplets.push(currArr)
			if (currSum < 0) middle++
			else right--
		}
	}

	return triplets
}

console.log(TripleSum([-3, 0, 1, 2, -1, 1, -2]))
console.log(TripleSum([-5, 2, -1, -2, 3]))

// TIME: O(n^2). We essentially have nested loops
// SPACE: O(n). At most we could have a 3n array, which reduces to n.
