/*
PURE WITCHCRAFT
1. sort array
2. keep running sum
BIG ASSUMPTION (REQUIRES MATH PHD)
- Any permutation of coins less than the running sum can be made/found
3. If next index number is more than running sum + 1, then return sum + 1
*/

function nonConstructibleChange(coins) {
	let sum = 0;
	coins.sort((a, b) => a - b);

	for (const i in coins) {
		if (coins[i] > sum + 1) return sum + 1;
		sum += coins[i];
	}
	return sum + 1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
