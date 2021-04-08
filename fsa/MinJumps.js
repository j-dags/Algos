const MinJumps = (arr) => {
	let minJumps = arr.map((el) => Infinity)
	minJumps[0] = 0

	for (let i = 1; i < arr.length; i++) {
		for (let j = 0; j <= i; j++) {
			if (j + arr[j] >= i) minJumps[i] = Math.min(minJumps[i], minJumps[j] + 1)
		}
	}
	return minJumps[arr.length - 1]
}

console.log(MinJumps([2, 4, 1, 1, 2, 3, 7, 1, 1, 3]))

/*
For each index, we check the previous indeces. If a previous index jumps past the current (aka j + arr[j] >= i), then set the minimum jump for the current index equal to Math.min of the current answer and the previous index + 1.

For each index you compare previous indeces. All the while we are dynamically populating our jumps array. We're building up a minJumps array as we iterate through the input array.

TIME: O(n^2) - nested iteration no matter what
SPACE: O(n)
*/
