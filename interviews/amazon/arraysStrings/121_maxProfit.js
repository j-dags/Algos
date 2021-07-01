/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Approach:
Keep track of the current max and min while iterating through prices. Note that we calculate the max using the prev min.

O(n)t | O(1)s

*/

var maxProfit = function (prices) {
	let min = Infinity
	let max = -Infinity

	for (const price of prices) {
		max = Math.max(0, max, price - min)
		min = Math.min(min, price)
	}
	return max
}
