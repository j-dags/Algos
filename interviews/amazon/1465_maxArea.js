/*
You are given a rectangular cake of size h x w and two arrays of integers horizontalCuts and verticalCuts where:

    horizontalCuts[i] is the distance from the top of the rectangular cake to the ith horizontal cut and similarly, and
    verticalCuts[j] is the distance from the left of the rectangular cake to the jth vertical cut.

Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and verticalCuts. Since the answer can be a large number, return this modulo 109 + 7.

Approach:
The trick is realizing that all vertical cuts will cross all horizontal cuts. So the maximum area will just be the largest horizontal span times the largest vertical span.

1. Sort cut arrays
2. Iterate through cut arrays and find the max spans
3. Multiple the maxes to get the value

NOTE: The trick in JS is that all Numbers are dbl-precisiong floating point format. There are no explicit integers. JS introduced BigInt in order to handle large numbers. We convert our spans to BigInt and multiple to get the proper answer.

O(nlogn+mlogm)t | O(1)s
*/

var maxArea = function (h, w, hCuts, vCuts) {
	hCuts.sort((a, b) => a - b)
	vCuts.sort((a, b) => a - b)

	let maxH = Math.max(hCuts[0], h - hCuts[hCuts.length - 1])
	let maxV = Math.max(vCuts[0], w - vCuts[vCuts.length - 1])

	for (let i = 1; i < hCuts.length; i++) {
		maxH = Math.max(maxH, hCuts[i] - hCuts[i - 1])
	}

	for (let i = 1; i < vCuts.length; i++) {
		maxV = Math.max(maxV, vCuts[i] - vCuts[i - 1])
	}

	console.log(`max H: ${maxH}`)
	console.log(`max V: ${maxV}`)
	return (BigInt(maxH) * BigInt(maxV)) % 1000000007n
}

console.log(maxArea(1000000000, 1000000000, [2], [2]))
