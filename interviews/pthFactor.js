/*
Prompt: Find the pth Factor of a given number, n.
Approach: Iterate from 1 to n. Initialize a counter and increment it any time we find a factor.

O(n)t | O(1)s. Worst case we iterate from 1 all the way to n. Constant space requirements.
*/

const pthFactor = function (n, p) {
	let factor = 0
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) factor++
		if (factor === p) return i
	}
	return -1
}

console.log(pthFactor(7, 2))
console.log(pthFactor(12, 3))
console.log(pthFactor(3, 2))
