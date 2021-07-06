// var connectSticks = function (sticks) {
// 	sticks = sticks.sort((a, b) => a - b)
// 	console.log(sticks)
// 	const n = sticks.length
// 	const first = sticks.shift() * (n - 1)

// 	return (
// 		first +
// 		sticks.reduce((acc, el, idx) => {
// 			return (acc += (n - 1 - idx) * el)
// 		}, 0)
// 	)
// }

// we need to combine smallest sticks each time
// when we combined the sticks we add it to the combined arr
const connectSticks = (sticks) => {
	if (sticks.length <= 1) return 0
	// sorting at the beginning
	sticks.sort((a, b) => a - b)
	const combined = []
	let res = 0
	while (sticks.length || combined.length > 1) {
		let curSum = 0
		// we need to sticks to combine => counter is 2
		let counter = 2
		while (counter--) {
			// if we have original stick and it is less than first combined -> take original
			const condition =
				sticks.length && (!combined.length || sticks[0] < combined[0])
			// add to curSum and remove first from either combined or original sticks array
			curSum += condition ? sticks.shift() : combined.shift()
		}
		// add to result and add the stick that we combined to combined array
		res += curSum
		combined.push(curSum)
	}
	return res
}

// console.log(connectSticks([2, 4, 3])) // 14
// console.log(connectSticks([1, 8, 3, 5])) // 30
// console.log(connectSticks([5])) // 30
console.log(
	connectSticks([3354, 4316, 3259, 4904, 4598, 474, 3166, 6322, 8080, 9009])
) // 30
