/*
Given an integer n, calculate the first n numbers in the Fibonacci sequence given starting elements of (0,1). Return an array of n integers, including the given 0,1 in the sequence.

Approach:
Memo/DP. Return keep pushing elements into array
*/

const fibonacci = (n) => {
	if (n === 0) return []
	if (n === 1) return [0]
	let memo = [0, 1]

	for (let i = 2; i < n; i++) {
		memo.push(memo[i - 1] + memo[i - 2])
	}
	return memo
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))
