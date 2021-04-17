function kadanesAlgorithm(array) {
	let currSum = array[0];
	let max = array[0];
	for (let i = 1; i < array.length; i++) {
		currSum = Math.max(array[i], array[i] + currSum);
		max = Math.max(max, currSum);
	}
	return max;
}

/*
TIME: O(n)
SPACE: O(1)

Iterate through loop once. The largest sum at each index i is either "i + sum(0,i-1)" or just element i. So our algorithm keeps track
of the current sum at each element. If that sum is bigger than any previous sum, we store that sum as max.

*/
