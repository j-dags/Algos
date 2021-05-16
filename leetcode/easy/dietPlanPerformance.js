/*
Given an integer k, for every consecutive sequence of k days (calories[i], calories[i+1], ..., calories[i+k-1] for all 0 <= i <= n-k), they look at T, the total calories consumed during that sequence of k days (calories[i] + calories[i+1] + ... + calories[i+k-1]):

    If T < lower, they performed poorly on their diet and lose 1 point;
    If T > upper, they performed well on their diet and gain 1 point;
    Otherwise, they performed normally and there is no change in points.

Initially, the dieter has zero points. Return the total number of points the dieter has after dieting for calories.length days.

Approach:
Sliding window with a fixed window size, k.

O(n)t | O(1)s

*/

const dietPlanPerformance = (calories, k, lower, upper) => {
	let points = 0
	let windowCalories = 0

	for (let end = 0; end < calories.length; end++) {
		windowCalories += calories[end] // Add calories[end] to window

		// Checks if windowSize is >= k
		if (end >= k - 1) {
			// If windowSize > k, shrink window
			if (end > k - 1) windowCalories -= calories[end - k]

			// Once windowSize === k, inc/dec points accordingly
			if (windowCalories < lower) --points
			if (windowCalories > upper) ++points
		}
	}
	return points
}

console.log(dietPlanPerformance([1, 2, 3, 4, 5], 1, 3, 3))
