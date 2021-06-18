/*
Given an array of integers where each element represents the max number of steps that can be made forward from that element. Write a function to return the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, they cannot move through that element. If the end isn’t reachable, return -1.


Approach:
For each index, we check the previous indeces. If a previous index jumps past the current (aka j + arr[j] >= i), then set the minimum jump for the current index equal to Math.min of the current answer and the previous index + 1.

For each index you compare previous indeces. All the while we are dynamically populating our jumps array. We're building up a minJumps array as we iterate through the input array.

TIME: O(n^2) - nested iteration no matter what
SPACE: O(n)
*/

function minJumps(arr) {
	let jumps = Array(arr.length).fill(Infinity)
	jumps[0] = 0

	for (let i = 1; i < arr.length; i++) {
		for (let j = 0; j <= i; j++) {
			if (j + arr[j] >= i) jumps[i] = Math.min(jumps[i], 1 + jumps[j])
		}
	}
	return jumps[arr.length - 1]
}

console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9])) // 3
