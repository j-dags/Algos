function maxSubsetSumNoAdjacent(arr) {
	if (!arr.length) return 0;
	if (arr.length === 1) return arr[0];

	let prevMax = arr[0];
	let max = Math.max(arr[0], arr[1]);

	for (let i = 2; i < arr.length; i++) {
		const newMax = Math.max(max, prevMax + arr[i]);
		prevMax = max;
		max = newMax;
	}
	return max;
}

/*
TIME: O(n) - length of arr
SPACE: O(1) - only storing variables
*/

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
