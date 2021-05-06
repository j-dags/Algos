/*
Given an array of n ticket prices. Find the lowest and largest subsequence where each element is no greater than 1 larger than the previous element.

Approach: Sort the array. Using a sliding window.

O(nlogn)t | O(1)s. Iterate through the array, nlogn for the sort operation. No additional space required
*/

const pickingTickets = (tickets) => {
	// Sort ticket prices
	tickets = tickets.sort((a, b) => a - b)
	let maxSub = 0
	let start = 0

	// Iterate through ticket prices
	for (let end = 0; end < tickets.length; end++) {
		// Reset start if there is a jump
		if (end !== 0 && tickets[end] - tickets[end - 1] > 1) start = end

		// Close window. If the diff in values > diff in indexes we need to shrink the window
		while (tickets[end] - tickets[start] > end - start) start++

		// Save max value of current window size and prev max window size
		maxSub = Math.max(maxSub, 1 + end - start)
	}
	return maxSub
}

console.log(pickingTickets([8, 5, 4, 8, 4]))
console.log(pickingTickets([1, 2, 2, 2, 3, 5, 5, 6, 6, 7]))
