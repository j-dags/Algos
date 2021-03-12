function getPermutations(arr) {
	const permutations = []
	permHelper(0, arr, permutations)
	return permutations
}

function permHelper(i, arr, permutations) {
	// If i === last index, we've done all the needed swapping for the current permutation. Push permutation to results
	if (i === arr.length - 1) permutations.push(arr.slice())
	else {
		//
		for (let j = i; j < arr.length; j++) {
			swap(i, j, arr)
			permHelper(i + 1, arr, permutations)
			swap(i, j, arr)
		}
	}
}

// swap helper function
function swap(one, two, arr) {
	let temp = arr[two]
	arr[two] = arr[one]
	arr[one] = temp
}

// TIME: O(n * n!)
// SPACE: O(n * n!)

/*
[1,2,3] i=0 j=0
  swap(i,j) -> 123
  getPerms([1,2,3]) i+1
      [1,2,3] i=1 j=1
      swap(i,j) -> 123
          getPerms([1,2,3]) i+1
          i === end, -> save [1,2,3] to results
      [1,2,3] i=1 j=2
      swap(i,j) -> 132
          getPerms([1,3,2]) i+1
          i === end, -> save [1,3,2] to results

[1,2,3] i=0 j=1
  swap(i,j) -> 213
  getPerms([2,1,3]) i+1
      [2,1,3] i=1 j=1
      swap(i,j) -> 213
          getPerms([2,1,3]) i+1
          i === end, -> save [2,1,3] to results
      [2,1,3] i=1 j=2
      swap(i,j) -> 231
          getPerms([2,3,1]) i+1
          i === end, -> save [2,3,1] to results

[1,2,3] i=0 j=2
  swap(i,j) -> 321
  getPerms([3,2,1]) i+1
      [3,2,1] i=1 j=1
      swap(i,j) -> 321
          getPerms([3,2,1]) i+1
          i === end, -> save [3,2,1] to results
      [3,2,1] i=1 j=2
      swap(i,j) -> 312
          getPerms([3,1,2]) i+1
          i === end, -> save [3,1,2] to results
 */
