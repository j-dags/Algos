/*
Given two arrays that represent speeds or riders bicycling. Tandem riders will always ride at the speed of the fastest person. Depending on if fastest is true or false, return the fastest or slowest sum of all tandem riders.

Appraoch:
Sort array one in asc order. Sort array two in asc or desc order depending on if fastest is true or false. Use a reduce to add up the sums of the riders.

O(nlogn)t | O(n)s

*/

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
	// Sort red shirt speeds in asc order
	redShirtSpeeds = redShirtSpeeds.sort((a, b) => a - b)
	// Sort blue shirts in asc/desc order depending on value of fastest
	if (fastest) blueShirtSpeeds = blueShirtSpeeds.sort((a, b) => b - a)
	else blueShirtSpeeds = blueShirtSpeeds.sort((a, b) => a - b)

	// Return the sum of all the fastest riders
	return redShirtSpeeds.reduce((acc, el, idx) => {
		return acc + Math.max(redShirtSpeeds[idx], blueShirtSpeeds[idx])
	}, 0)
}
